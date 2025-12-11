pipeline {
    agent any

    environment {
        TAG = "${env.GIT_TAG ?: env.GIT_COMMIT}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Setup') {
            steps {
                bat "echo Tag build: ${TAG}"
            }
        }

        stage('Build') {
            steps {
                bat """
                    docker build -t power_gym:${TAG} -f dockerfile .
                """
            }
        }

        stage('Run (Docker)') {
            steps {
                bat """
                    docker rm -f power_gym-tag || exit 0
                    docker run -d --name power_gym-tag -p 3003:80 power_gym:${TAG}
                """
            }
        }

        stage('Smoke Test') {
            steps {
                bat "scripts\\smoke.bat http://localhost:3003"
            }
        }

        stage('Archive Artifacts') {
            steps {
                bat "docker image save power_gym:${TAG} -o power_gym-${TAG}.tar || exit 0"
                archiveArtifacts artifacts: "power_gym-${TAG}.tar,**/smoke_result.txt", fingerprint: true
            }
        }
    }

    post {
        always {
            bat "docker rm -f power_gym-tag || exit 0"
        }
    }
}

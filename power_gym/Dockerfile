# ===== Stage 1: Build Node app =====
FROM node:20-alpine as builder

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build the app (si mouch frontend tawa, npm run build y5dem fel folder li 3andek)
RUN npm run build || echo "No build script, skipping build"

# ===== Stage 2: Deploy with Nginx =====
FROM nginx:alpine

# Copy build output to Nginx html folder
# Si ma fama build, t5ali les fichiers statiques
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]


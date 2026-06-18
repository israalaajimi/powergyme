# Power Gym BookStore

A full-featured React bookstore application with user and admin interfaces.

## Features

### User Interface (Public Area)
- **Home Page**: Welcome page with navigation to books
- **Book List**: Browse all available books with search functionality
- **Book Details**: View detailed information about each book
- **Favorites**: Save and view your favorite books (stored in localStorage)
- **Search**: Search books by title

### Admin Interface (Private Area)
- **Admin Login**: Secure login page (static credentials)
- **Dashboard**: View all books in a table format
- **Add Book**: Create new books
- **Edit Book**: Update existing book information
- **Delete Book**: Remove books from the store

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Context API** - State management
- **LocalStorage** - Data persistence

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── admin/          # Admin-specific components
│   │   ├── AdminSidebar.jsx
│   │   ├── AdminBookTable.jsx
│   │   └── AdminBookForm.jsx
│   ├── BookCard.jsx
│   ├── BookList.jsx
│   ├── SearchBar.jsx
│   ├── FavoriteButton.jsx
│   ├── Navbar.jsx
│   └── ProtectedRoute.jsx
├── pages/              # Page components
│   ├── admin/          # Admin pages
│   │   ├── AdminLogin.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── AddBook.jsx
│   │   └── EditBook.jsx
│   ├── Home.jsx
│   ├── BookList.jsx
│   ├── BookDetail.jsx
│   └── Favorites.jsx
├── context/            # Context providers
│   ├── BooksContext.jsx
│   └── AuthContext.jsx
├── assets/             # Static assets
├── App.jsx             # Main app component with routing
└── main.jsx            # Entry point
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Admin Credentials

- **Username**: `admin`
- **Password**: `admin123`

## Data Storage

All data is stored in the browser's localStorage:
- Books are stored under the key `powerGymBooks`
- Favorites are stored under the key `powerGymFavorites`
- Admin authentication is stored under the key `powerGymAdminAuth`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Routes

### Public Routes
- `/` - Home page
- `/books` - Book list page
- `/book/:id` - Book detail page
- `/favorites` - Favorites page

### Admin Routes (Protected)
- `/admin/login` - Admin login page
- `/admin/dashboard` - Admin dashboard
- `/admin/add-book` - Add new book
- `/admin/edit-book/:id` - Edit existing book

## Features Implementation

### Search Functionality
- Real-time search by book title
- Case-insensitive matching
- Results update as you type

### Favorites System
- Click the heart icon on any book card or detail page
- Favorites persist across page refreshes
- View all favorites on the Favorites page

### Admin Features
- Protected routes require authentication
- Full CRUD operations for books
- Form validation for book data
- Image preview in admin forms

## Styling

The application uses custom CSS with:
- Responsive design for mobile and desktop
- Modern UI with clean aesthetics
- Smooth transitions and hover effects
- Consistent color scheme

## Browser Support

Works on all modern browsers that support:
- ES6+ JavaScript
- LocalStorage API
- CSS Grid and Flexbox
\\israyassmineingenieurs 
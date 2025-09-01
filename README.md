# Forkify - Full-Stack Food Delivery Application

Welcome to Forkify, a comprehensive MERN stack food delivery web application. This project features a complete user-facing frontend, a powerful admin panel for managing the restaurant, and a robust backend to tie it all together.

[**Live Demo**](forkify-food-delivery-app.vercel.app)

## Key Features

- **Modern Tech Stack:** Built with MongoDB, Express.js, React, and Node.js (MERN), featuring a Vite-powered frontend for a blazing-fast development experience.
- **Dynamic Frontend:** A fully responsive and interactive user interface styled with Tailwind CSS for a clean, modern look.
- **Powerful Admin Panel:** A separate interface for restaurant owners to add new food items, view and manage orders, and update item details.
- **Full E-commerce Functionality:** Users can browse the menu, add items to their cart, and proceed to checkout.
- **User Authentication:** Secure user registration and login functionality using JSON Web Tokens (JWT).

## Tech Stack

### Frontend
- **React.js:** For building the user interface.
- **Vite:** As the frontend build tool for a rapid development workflow.
- **Tailwind CSS:** For all styling and responsive design.
- **React Router:** For client-side routing.
- **Axios:** For making API requests to the backend.
- **React Toastify:** For user-friendly notifications.

### Backend
- **Node.js & Express.js:** For the server-side logic and API.
- **MongoDB:** As the NoSQL database for storing user, food, and order data.
- **JWT (JSON Web Token):** For secure user authentication.
- **Multer:** For handling file uploads (food images).

### Admin Panel
- A dedicated React application for managing the restaurant's data and operations.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js and npm installed on your machine.
- A MongoDB database instance (either local or cloud-based like MongoDB Atlas).

### Installation

1.  **Clone the repository:**
    ```
    git clone https://github.com/crystaljain27/forkify-food-delivery-app.git
    cd forkify-food-delivery-app
    ```

2.  **Install Backend Dependencies:**
    ```
    cd backend
    npm install
    ```

3.  **Install Frontend Dependencies:**
    ```
    cd ../frontend
    npm install
    ```

4.  **Install Admin Panel Dependencies:**
    ```
    cd ../admin
    npm install
    ```

### Configuration

- Create a `.env` file in the `backend` folder and add your MongoDB connection string and JWT secret.
- Create a `.env` file in the `frontend` folder and add the backend URL.

### Running the Application

1.  **Start the Backend Server:**
    ```
    cd backend
    npm start
    ```

2.  **Start the Frontend Application:**
    ```
    cd ../frontend
    npm run dev
    ```

3.  **Start the Admin Panel:**
    ```
    cd ../admin
    npm run dev
    ```

---

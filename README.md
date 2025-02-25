# Behamic Task API

This repository contains a Node.js RESTful API for a car rental system, built with Express.js and MongoDB. The API provides user authentication using JWT and allows users to register, log in, view their profiles, and browse available rental cars.

## Features

- **User Authentication**: Register and log in with secure password hashing and JWT-based authentication.
- **User Profile Management**: View and manage user profile information.
- **Car Browsing**: Browse and search available rental cars.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/) (running locally)
- [npm](https://www.npmjs.com/) (Node package manager)

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/arbnorracii/behamics-task.git
   cd behamics-task
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:

   Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/carRental
   JWT_SECRET=**********
   ```

4. **Start the Server**:

   ```bash
   npm start dev
   ```

   The API will be running at `http://localhost:5000`.

## API Endpoints

- **User Registration**: `POST http://localhost:5000/api/users/register`
- **User Login**: `POST http://localhost:5000/api/users/login`
- **Get User Profile**: `GET http://localhost:5000/api/users/profile` (Protected)
- **Get All Cars**: `GET http://localhost:5000/api/cars`
- **Get Car by ID**: `GET http://localhost:5000/api/cars/:id`

## Testing with Postman

You can test the API endpoints using [Postman](https://www.postman.com/). Below are some sample requests:

### 1. User Registration
- **Endpoint**: `POST http://localhost:5000/api/users/register`
- **Payload**:
  ```json
  {
    "name": "Arbnor Raci",
    "email": "arbnorii.r@gmail.com.com",
    "password": "*****"
  }
  ```

### 2. User Login
- **Endpoint**: `POST http://localhost:5000/api/users/login`
- **Payload**:
  ```json
  {
    "email": "arbnorii.r@gmail.com.com",
    "password": "*****"
  }
  ```

### 3. Get User Profile (Requires Auth Token)
- **Endpoint**: `GET http://localhost:5000/api/users/profile`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer *****"
  }
  ```

### 4. Get All Cars
- **Endpoint**: `GET http://localhost:5000/api/cars`

### 5. Get Car by ID
- **Endpoint**: `GET http://localhost:5000/api/cars/{car_id}`

## Project Structure

```
behamics-task/
│-- server.js          # Entry point of the application
│-- routes/            # Contains route definitions for users and cars
│-- models/            # Defines Mongoose schemas and models
│-- middleware/        # Contains authentication middleware
│-- .env.example       # Example environment variables file
│-- package.json       # Project dependencies and scripts
```

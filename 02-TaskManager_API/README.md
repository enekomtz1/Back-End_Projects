![Task Manager API Banner](https://i.imgur.com/RzpzRwB.png)

# Task Manager API

The Task Manager API provides a backend service for managing tasks with user authentication. It allows users to register, login, and manage their tasks efficiently.

## Table of Contents

-   [Introduction](#introduction)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Features](#features)
-   [Dependencies](#dependencies)
-   [Configuration](#configuration)
-   [API Endpoints](#api-endpoints)
    -   [User Endpoints](#user-endpoints)
    -   [Task Endpoints](#task-endpoints)
-   [Contributors](#contributors)
-   [License](#license)

## Introduction

This project is a RESTful API for a task management system where authenticated users can perform CRUD operations on tasks. Each task is linked to a user who owns it. The API uses MongoDB for storage, Express for routing, and supports user authentication via JWT tokens.

## Installation

To get the project up and running on your local machine, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/enekomtz1/Back-End_Projects.git
    cd Back-End_Projects/02-TaskManager_API
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up your MongoDB and ensure the `MongoDB_URL` and `JWT_SECRET_KEY` are provided in your `.env` file:

    ```
    MongoDB_URL=your_mongodb_connection_string
    JWT_SECRET_KEY=your_jwt_secret
    ```

4. Start the server:
    ```bash
    npm run server
    ```

## Usage

After installation, the API will be running on `http://localhost:3000`. Use Postman or any other API testing tool to interact with the available endpoints.

## Features

-   User registration and authentication.
-   CRUD operations for tasks.
-   Task association with authenticated users.
-   Middleware for user authentication.

## Dependencies

-   Node.js
-   Express
-   Mongoose
-   bcrypt
-   jsonwebtoken
-   dotenv
-   body-parser
-   nodemon (for development)

## Configuration

Environmental variables are used to manage configuration settings such as database connection strings and the secret key for JWT. Ensure you have a `.env` file in the root directory with the following variables set:

-   `MongoDB_URL`: The connection string for MongoDB.
-   `JWT_SECRET_KEY`: A secret key for encoding and decoding JWT tokens.

## API Endpoints

### User Endpoints

-   `POST /users/register`: Register a new user.
-   `POST /users/login`: Login a user and return an authentication token.

### Task Endpoints

-   `GET /tasks`: Fetch all tasks for the authenticated user.
-   `POST /tasks`: Create a new task.
-   `GET /tasks/:id`: Fetch a single task by ID.
-   `PATCH /tasks/:id`: Update a task by ID.
-   `DELETE /tasks/:id`: Delete a task by ID.

## Contributors

-   [enekomtz1](https://github.com/enekomtz1)

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.

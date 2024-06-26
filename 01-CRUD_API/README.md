![CRUD API Banner](https://i.imgur.com/ie4YViv.png)

# CRUD API

This project provides a simple CRUD (Create, Read, Update, Delete) API for managing products. It is built using Node.js, Express, and MongoDB.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Features](#features)
-   [Dependencies](#dependencies)
-   [Configuration](#configuration)
-   [API Endpoints](#api-endpoints)
-   [Models](#models)
-   [Examples](#examples)
-   [Contributors](#contributors)
-   [License](#license)

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/enekomtz1/Back-End_Projects.git
    cd Back-End_Projects/01-CRUD_API
    ```

2. Install the required packages:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the MongoDB connection password:

    ```plaintext
    MongoDB_Password=your_mongodb_password_here
    ```

4. Start the server:
    - For development:
        ```bash
        npm run dev
        ```
    - For production:
        ```bash
        npm run server
        ```

## Usage

Once the server is running, the API will be accessible via `http://localhost:3000`. You can use any HTTP client to interact with the API.

## Features

-   CRUD operations for product management.
-   Validation of product entries.
-   Connection to MongoDB Atlas.

## Dependencies

-   `dotenv`: Loads environment variables from a `.env` file into `process.env`.
-   `express`: Fast, unopinionated, minimalist web framework.
-   `mongodb`: The official MongoDB driver for Node.js.
-   `mongoose`: MongoDB object modeling designed to work in an asynchronous environment.
-   `nodemon`: Utility that monitors for any changes in your source and automatically restarts your server.

## Configuration

The project uses environment variables for configuration to enhance security and flexibility in deployment environments. Ensure you have a `.env` file as specified in the installation instructions.

## API Endpoints

### Products

-   **GET `/api/products`** - Retrieves all products.
-   **GET `/api/products/:id`** - Retrieves a product by its ID.
-   **POST `/api/products`** - Creates a new product.
-   **PUT `/api/products/:id`** - Updates an existing product by its ID.
-   **DELETE `/api/products/:id`** - Deletes a product by its ID.

## Models

### Product Model

-   **name**: `String` (required)
-   **quantity**: `Number` (required, default `0`)
-   **price**: `Number` (required, default `0`)
-   **image**: `String` (optional)

Each product is also automatically given `createdAt` and `updatedAt` timestamps.

## Contributors

-   [enekomtz1](https://github.com/enekomtz1)

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit).

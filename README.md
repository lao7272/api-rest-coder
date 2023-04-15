
# Project Title




## Installation
To install Api Rest Coder API, follow these steps:
1. Clone the repository from GitHub: `git clone https://github.com/lao7272/api-rest-coder`
2. Navigate to the project directory: `cd api-rest-api`
3. Install dependencies: `npm install`
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Define the required environment variables, such as `PORT`, `MONGO_ATLAS_URI`, and `SECRET_JWT_TOKEN` for database connection, port number, and JWT token secret key respectively.

## Usage
To use Product Management API, follow these instructions:
1. Start the server: `npm start` or `node server.js`
2. Access the API endpoints using a RESTful client, such as `curl`, or a tool like [Postman](https://www.postman.com/).
3. Refer to the API documentation below for details on the available endpoints and their functionalities.

    
## API Reference

#### Login

```http
- `POST /api/register`: Register a new user.
- `POST /api/login`: Log in an existing user.
```
For authentication, include a JWT token in the `Authorization` header for protected routes.

#### Products

```http
- `GET /api/products`: Get a list of all users.
- `GET /api/products/:id`: Get details of a specific user.
- `POST /api/products/`: Creates a new product.
- `PUT /api/products/:id`: Update details of a specific product.
- `DELETE /api/product/:id`: Delete a specific product.
```

#### Carts

```http
- `GET /api/cart`: Get a list of all cart.
- `GET /api/cart/:id`: Get details of a specific cart.
- `POST /api/cart/`: Creates a new cart.
- `PUT /api/cart/:id`: Update details of a specific cart.
- `DELETE /api/cart/:id`: Delete a specific cart.
```

#### Orders

```http
- `GET /api/order`: Get a list of all orders.
- `POST /api/order/`: Creates a new order.

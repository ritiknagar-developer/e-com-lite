---

## **2️⃣ Backend – README.md**

```markdown
# E-Com Lite - Backend

This is the **backend** for the E-Com Lite: Industrial Parts Store project.  
It is built with **Node.js**, **Express.js**, and **MongoDB** (with Mongoose).

---

## Features

- Provides API endpoints for:
  - Products: list, stock info
  - Orders: place order, get order history
- **Secure Checkout**: verifies stock before confirming orders
- Calculates **total price** on the server (Price × Quantity)
- Updates product stock after successful checkout
- Handles out-of-stock and validation errors

---

## Installation

1. Clone the repository:

```bash
git clone <YOUR_BACKEND_REPO_URL>

Navigate to the backend folder:

cd backend

Install dependencies:

npm install

Create a .env file in the root of backend:

MONGO_URI=<Your MongoDB Connection String>
PORT=5000

Seed sample products (optional but recommended):

node seed.js

Start the backend server:

npm run dev

Server runs at http://localhost:5000.

API Endpoints
GET /products

Returns all products with name, price, and stock.

GET /orders

Returns all previous orders.

POST /orders/checkout

Request body:

{
  "items": [
    { "productId": "<PRODUCT_ID>", "quantity": 2 }
  ]
}

Validates stock availability

Calculates total price on backend

Updates product stock

Returns success or error message
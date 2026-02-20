# E-Com Lite: Industrial Parts Store

A mini e-commerce application to buy industrial parts.  
Built with **MERN Stack** (MongoDB, Express.js, React.js, Node.js).

The project focuses on:

- Preventing overselling
- Calculating totals on the server
- Clean and responsive UI with Cart and Orders sidebar

---

## Features

### Core Functionality

- **Product List**: Displays product name, price, and available stock
- **Add to Cart**: Frontend manages local cart state
- **Checkout**: Backend verifies stock and calculates total price
- **Order History**: List of previous orders with totals
- **Validation**: Prevent adding more items than available in stock
- **Responsive UI**: Works on desktop, tablet, and mobile

### Technical Highlights

- **Backend**:
  - Stock validation before checkout
  - Total price calculated on server (never trust frontend price)
  - MongoDB updates stock on successful order

- **Frontend**:
  - React.js with Tailwind CSS for UI
  - Sidebar/Modal cart and order view
  - Toast notifications for success/error messages

---

## Installation & Run

### Backend

```bash
cd backend
npm install
cp .env.example .env      # Add your MongoDB URI in .env
node seed.js              # Add sample products
npm start                 # Run backend on port 5000


##Frontend
cd frontend
npm install
npm run dev               # Runs Vite development server

Then open your browser at http://localhost:5173 (or the port shown in console).



Usage
Browse products
Add items to cart
Open cart sidebar to view selected items
Click Place Order to checkout
Orders sidebar shows your order history



Author
Ritik Kumar Nagar
GitHub: ritiknagar-developer
Email: ritiknagarjawal@gmail.com


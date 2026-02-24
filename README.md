# Grocery App
A modern full-featured grocery shopping web application built with React.
Users can browse products, add items to cart, manage quantities, and admins can manage inventory.

## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [API Endpoints](#api-endpoints)
- [Key Architecture Decisions](#key-architecture-decisions)
- [Future Improvements](#future-improvements)
- [Deployment](#deployment)
- [Authors](#authors)

## Project Description
The Grocery App is a responsive web application built with React and Vite.
It allows users to browse grocery products, manage a shopping cart, and simulate a real shopping experience using a mock backend powered by JSON Server.
The project demonstrates state management, routing, API communication, and modular component architecture.

## Features
Home Page
- Modern hero section
- Featured categories
- Promotional banner
Shop Page
- Fetches products from JSON Server
- Displays responsive product grid
- Add to Cart functionality
Cart Page
- View added items
- Update quantities
- Remove items
- Real-time grand total calculation
- Persistent cart using backend API
Admin Dashboard
- Add new products
- Delete products
- Form validation
- Confirmation modals
User Feedback
- Toast notifications
- SweetAlert confirmations
- Error handling
  
## Tech Stack
- React (Vite)
- React Router DOM
- Context API (Global Cart State)
- Axios
- JSON Server (Mock Backend)
- React Hot Toast
- SweetAlert2
- Modern CSS
  
## Project Structure
src/
│
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── ProductCard.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── Cart.jsx
│   └── Admin.jsx
│
├── context/
│   └── CartContext.jsx
│
├── App.jsx
└── main.jsx

## Installation & Setup
1. Clone the repository
git clone https://github.com/josephndemo/GroceryApp---Group1.git
cd grocery-mvp
2. Install dependencies
npm install
3. Install JSON Server (if not installed)
npm install -g json-server
4. Create db.json
Create a db.json file in the root directory:
JSON
{
  "products": [],
  "cart": []
}
5. Start JSON Server
npx json-server --watch db.json --port 3000
Backend runs at: http://localhost:3000
6. Start React App
npm run dev
App runs at: http://localhost:5173

## API Endpoints
Method: GET
Endpoint: /products
Description: Fetch all products

Method: POST
Endpoint: /products
Description: Add product

Method: DELETE
Endpoint: /products/:id
Description: Delete product

Method: GET
Endpoint: /cart
Description: Fetch cart

Method: POST
Endpoint: /cart
Description: Add to cart

Method: PUT
Endpoint: /cart/:id
Description: Update quantity

Method: DELETE
Endpoint: /cart/:id
Description: Remove from cart

## Key Architecture Decisions
- Global cart state handled with Context API
- Backend persistence via JSON Server
- Optimistic UI updates for improved user experience
- Functional state updates to prevent stale state bugs
- Modular component-based structure
  
## Future Improvements
- Product search and filtering
- Checkout page
- User authentication
- Protected admin route
- Payment integration (Stripe)
- Dark mode toggle
- Deployment improvements
  
## Deployment
You can deploy the frontend on:
- Vercel
- Netlify
- Render
The backend (JSON Server) can be deployed on:
- Render
- Railway
  
## Authors
Joseph Ndemo
Agnes Nganga
Charles Wabera
Mark Warunge
Timothy Kangangi

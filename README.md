# ShopPlus

Welcome to **ShopPlus**, a simple eCommerce shopping website, which provides a user-friendly interface for browsing products, managing a shopping cart, and includes an admin dashboard for efficient product management.

## Features

- **User Authentication**: Secure user registration and login.
- **Password Reset**: Utilizes Mailtrap for handling password reset emails.
- **Product Browsing**: View a wide range of products with detailed descriptions and images.
- **Shopping Cart**: Easily add, remove, and update products in your cart.
- **Checkout Process**: Supports multiple payment options:
  - Cash on Delivery (COD)
  - Card payments via Stripe
- **Admin Dashboard**:
  - Add new products
  - Modify existing product information
- **Image Storage**: Utilizes Cloudinary for storing and managing product images.
- **Database**: Uses MongoDB Atlas for cloud-based database management.

## Technologies Used

- **MongoDB Atlas**: Cloud-based NoSQL database for storing product and user data.
- **Express**: Backend web framework for building the API.
- **React**: Frontend library for creating interactive user interfaces.
- **Node.js**: JavaScript runtime for executing server-side code.
- **JWT**: For secure user authentication.
- **Mailtrap**: For managing password reset emails.
- **Cloudinary**: For storing and managing product images.
- **Stripe**: For processing card payments.

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB Atlas account for database management
- Mailtrap account for email services
- Cloudinary account for image storage
- Stripe account for payment processing

### Scripts

- **npm start**  
  Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

- **npm run build**  
  Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified, and the filenames include the hashes. Your app is ready to be deployed!

## Usage

1. **Open your browser and navigate to** [http://localhost:3000](http://localhost:3000).
2. **Register a new account, browse products, and manage your shopping cart.**
3. **For admin access, log in with admin credentials to access the admin dashboard where you can add or modify product information.**
4. **Use the password reset feature via Mailtrap if you forget your password.**
5. **During checkout, choose your preferred payment method: COD or card payment through Stripe.**
   - For testing card payments with Stripe, use the default card number 4242 4242 4242 4242 with any future expiration date and any CVC.
6. **After your item is ordered, you can leave a review for the product to share your experience with others.**

> Feel free to copy this into your README file, and let me know if you need more help!

# Sole-Stash

![License](https://img.shields.io/badge/license-MIT-blue.svg)

Sole-Stash is an e-commerce website primarily focused on selling **thrifted shoes**. Built with modern web technologies, it offers users a clean, intuitive platform for browsing, selecting, and purchasing pre-owned shoes.

## Features

- **Product Listings**: Browse through a collection of thrifted shoes with detailed descriptions, images, and pricing.
- **Search & Filter**: Filter by brand, size, price range, or condition.
- **Shopping Cart**: Add items to a cart and proceed to checkout with real-time updates.
- **User Authentication**: Secure user login and registration using Firebase Authentication.
- **Payment Integration**: Integrated with secure payment gateways.
- **Order Management**: View order history and track real-time updates on orders.

## Technologies

- **JavaScript (JS)**: The core programming language for frontend interactions.
- **Laravel**: For backend primarly inteacting with the DB (Not Yet Integrated).
- **React**: For building responsive and reusable user interface components.
- **Redux**: For managing and synchronizing the application state across components.
- **CSS**: For styling and layout.
- **Firebase**:
  - **Authentication**: Handles user login and registration.  
- **MYSQL**: Stores product data, user information, and orders (Not Yet Integrated).
- **Vercel**: Used to deploy and serve the website.
  

## Demo

https://project-sole-stash.vercel.app

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

List of software and tools needed to run the project.

- [Node.js](https://nodejs.org/en/download/) 
- [npm](https://www.npmjs.com/get-npm)

### Installation

1. Clone the repository

    ```bash
    git clone https://github.com/AdanKhan22/Project-SoleStash.git
    cd project-name
    ```

2. Install dependencies

    ```bash
    npm install
    # or
    yarn install
    ```

### Create a new firebase project

Login to your Google account and create a new Firebase project [HERE](https://console.firebase.google.com/).

Create an .env file and add the following variables.


```env

// SAMPLE CONFIG .env, you should put the actual config details found on your project settings

VITE_FIREBASE_API_KEY=AIzaKJgkjhSdfSgkjhdkKJdkjowf
VITE_FIREBASE_AUTH_DOMAIN=yourauthdomin.firebaseapp.com
VITE_FIREBASE_DB_URL=https://yourdburl.firebaseio.com
VITE_FIREBASE_PROJECT_ID=yourproject-id
VITE_FIREBASE_STORAGE_BUCKET=yourstoragebucket.appspot.com
VITE_FIREBASE_MSG_SENDER_ID=43597918523958
VITE_FIREBASE_APP_ID=234598789798798fg3-034
```

### Running the Project

To start the development server, run:

```bash
npm start
# or
yarn start
```

### Contributing

If you would like to contribute, please follow these steps:

-Fork the repository

-Create a new branch (git checkout -b feature-branch)

-Make your changes

-Commit your changes (git commit -am 'Add new feature')

-Push to the branch (git push origin feature-branch)

-Create a new Pull Request

-Please make sure your code adheres to our coding standards and has appropriate tests.


### License
This project is licensed under the MIT License - see the LICENSE file for details.

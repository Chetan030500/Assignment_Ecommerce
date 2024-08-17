# Assignment_Ecommerce
# Simple React Product App with Simulated Login

This is a simple React application that displays a list of products fetched from an API. The application includes a simulated login functionality, where users can "log in" to view the products and "log out" to restrict access.

## Features

- **Product Listing**: Fetches and displays a list of products from the API.
- **Simulated Login**: Users must "log in" to view the product listing.
- **Persistent Login State**: The login status is saved in `localStorage`, allowing the state to persist across page reloads.
- **Logout**: Users can log out to restrict access to the product listing.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Chetan030500/Assignment_Ecommerce
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.

2. You'll see a login form. Enter any username and password to "log in".

3. Upon logging in, the app will fetch and display products from the Fake Store API.

4. You can log out by clicking the "Logout" button, which will hide the product listing and return you to the login screen.

## Components

- **Home**: The main component that handles fetching and displaying products. It also manages the login state.
- **Product**: A child component used to display individual product details.
- **Spinner**: A simple loading spinner displayed while products are being fetched.

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **Fake Store API**: A free API for testing and prototyping e-commerce applications.

## Future Improvements

- **Actual Authentication**: Replace the simulated login with real authentication.
- **Styling**: Improve the design and responsiveness of the application.
- **Error Handling**: Enhance error handling during API requests.



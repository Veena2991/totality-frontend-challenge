# Property Booking App

A property booking application built with React. Users can browse property listings, filter properties based on various criteria, add properties to a cart, and proceed to checkout.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- React
- Create React App
- CSS for styling
- JSON for static data

## Features

- Browse property listings with images, descriptions, and prices.
- Filter properties based on location, price range, number of bedrooms, and amenities.
- Add properties to a cart and view the cart.
- Proceed to checkout with a form to enter booking details and payment information.
- Responsive design for mobile and desktop.

## Setup and Installation

### Prerequisites

- Node.js and npm installed. You can download them from [here](https://nodejs.org/).

### Installation Steps

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/property-booking-app.git
    cd property-booking-app
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Run the application:**
    ```sh
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

### Browsing Properties

- The homepage displays a list of available properties.
- Use the filter options to narrow down the listings based on your criteria.

### Adding to Cart

- Click on the "Add to Cart" button on any property listing to add it to your cart.
- View your cart by clicking on the cart icon/button.

### Checkout

- Click on "Proceed to Checkout" from the cart to go to the checkout form.
- Fill out your booking details and payment information.
- Submit the form to confirm your booking.

## Folder Structure

```plaintext
property-booking-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Property.js
│   │   ├── Filter.js
│   │   ├── Cart.js
│   │   └── Checkout.js
│   ├── data/
│   │   └── properties.json
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
├── README.md
└── ...

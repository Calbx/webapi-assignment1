# Restaurant Manager Module

This Restaurant Manager module provides functionalities to manage restaurant data. The module allows users to add, update, delete, search for, and retrieve details of restaurants within a simulated database.

## Setting up the Node Module

1. Clone the repository to your local directory.
2. Create a new file named app.js and insert the code below:
```
const restaurants = require("./Calbert_Restaurants.js");
```
3. To run the module, open a new terminal and enter the following command:
```
node app.js
```

## How to Use the Functions

### 'addRestaurant(name, cuisine, location, rating)'

This function allows the user to add a new restaurant to the database. The required parameters are:

- name: The name of the restaurant.
- cuisine: The type of cuisine the restaurant serves.
- location: The location of the restaurant.
- rating: The rating of the restaurant.

Example:

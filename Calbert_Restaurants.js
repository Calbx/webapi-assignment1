module.exports = {
    // Array of restaurants
    restaurants: [
        { name: "Pasta Palace", cuisine: "Italian", location: "New York", rating: 4.5 },
        { name: "Sushi Central", cuisine: "Japanese", location: "Los Angeles", rating: 4.7 },
        { name: "Curry Corner", cuisine: "Indian", location: "San Francisco", rating: 4.8 }
    ],

    // Function to add a new restaurant
    addRestaurant(name, cuisine, location, rating) {
        this.restaurants.push({ name, cuisine, location, rating });
        console.log(`"${name}" restaurant added successfully!`);
        console.log("");
    },

    // Function to display all restaurants
    displayRestaurants() {
        if (this.restaurants.length === 0) {
            console.log("No restaurants available.");
            console.log("");
        } else {
            console.log("Available restaurants:");
            this.restaurants.forEach((restaurant, index) => {
                console.log(`${index + 1}. ${restaurant.name} - Cuisine: ${restaurant.cuisine} - Location: ${restaurant.location} - Rating: ${restaurant.rating}`);
            });
            console.log("");
        }
    },

    // Function to search for restaurants by cuisine
    searchByCuisine(cuisine) {
        const filteredRestaurants = this.restaurants.filter(restaurant => restaurant.cuisine.toLowerCase() === cuisine.toLowerCase());
        if (filteredRestaurants.length === 0) {
            console.log(`No restaurants found serving ${cuisine} cuisine.`);
            console.log("");
        } else {
            console.log(`Restaurants serving ${cuisine} cuisine:`);
            filteredRestaurants.forEach((restaurant, index) => {
                console.log(`${index + 1}. ${restaurant.name} - Location: ${restaurant.location} - Rating: ${restaurant.rating}`);
            });
            console.log("");
        }
    },

    // Function to update the rating of a restaurant
    updateRating(name, newRating) {
        const restaurantToUpdate = this.restaurants.find(restaurant => restaurant.name.toLowerCase() === name.toLowerCase());
        if (restaurantToUpdate) {
            restaurantToUpdate.rating = newRating;
            console.log(`Rating of "${name}" restaurant updated to ${newRating}.`);
            console.log("");
        } else {
            console.log(`Restaurant "${name}" not found.`);
            console.log("");
        }
    },

    // Function to delete a restaurant
    deleteRestaurant(name) {
        const index = this.restaurants.findIndex(restaurant => restaurant.name.toLowerCase() === name.toLowerCase());
        if (index !== -1) {
            this.restaurants.splice(index, 1);
            console.log(`"${name}" restaurant deleted successfully.`);
            console.log("");
        } else {
            console.log(`Restaurant "${name}" not found.`);
            console.log("");
        }
    },

    // Function to search for restaurants by location
    searchByLocation(location) {
        const filteredRestaurants = this.restaurants.filter(restaurant => restaurant.location.toLowerCase() === location.toLowerCase());
        if (filteredRestaurants.length === 0) {
            console.log(`No restaurants found in ${location}.`);
            console.log("");
        } else {
            console.log(`Restaurants in ${location}:`);
            filteredRestaurants.forEach((restaurant, index) => {
                console.log(`${index + 1}. ${restaurant.name} - Cuisine: ${restaurant.cuisine} - Rating: ${restaurant.rating}`);
            });
            console.log("");
        }
    },

    // Function to get top-rated restaurants
    getTopRatedRestaurants() {
        const topRated = this.restaurants.filter(restaurant => restaurant.rating >= 4.5);
        if (topRated.length === 0) {
            console.log("No top-rated restaurants found.");
            console.log("");
        } else {
            console.log("Top-rated restaurants:");
            topRated.forEach((restaurant, index) => {
                console.log(`${index + 1}. ${restaurant.name} - Cuisine: ${restaurant.cuisine} - Location: ${restaurant.location} - Rating: ${restaurant.rating}`);
            });
            console.log("");
        }
    },

    // Function to get restaurants by rating range
    getRestaurantsByRating(minRating, maxRating) {
        const filteredRestaurants = this.restaurants.filter(restaurant => restaurant.rating >= minRating && restaurant.rating <= maxRating);
        if (filteredRestaurants.length === 0) {
            console.log(`No restaurants found with ratings between ${minRating} and ${maxRating}.`);
            console.log("");
        } else {
            console.log(`Restaurants with ratings between ${minRating} and ${maxRating}:`);
            filteredRestaurants.forEach((restaurant, index) => {
                console.log(`${index + 1}. ${restaurant.name} - Cuisine: ${restaurant.cuisine} - Location: ${restaurant.location} - Rating: ${restaurant.rating}`);
            });
            console.log("");
        }
    }
};

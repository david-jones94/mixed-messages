
// Importing Dish Data
import { dishes } from './data.js';


    const orderNo = Math.floor(Math.random() * 999);
    
    // User Dietary Preference
    const diets = [...new Set(dishes.map(dish => dish.dietary))];
    const userInput = diets[Math.floor(Math.random() * diets.length)];

    // Filter Dishes Based on Dietary Preference
    const userDishes = dishes.filter(dish => dish.dietary === userInput);
    const starter = userDishes.filter(dish => dish.dish === 'Starter');
    const main = userDishes.filter(dish => dish.dish === 'Main');
    const dessert = dishes.filter(dish => dish.dish === 'Dessert');

    // Random Selection
    const randomStarter = starter[Math.floor(Math.random() * starter.length)];
    const randomMain = main[Math.floor(Math.random() * main.length)];
    const randomDessert = dessert[Math.floor(Math.random() * dessert.length)];


    // Output
    console.log(`Order No: ${orderNo}`);
    console.log(`Dietary Preference: ${userInput}`);
    console.log(`Starter: ${randomStarter.name} (${randomStarter.cuisine})`);
    console.log(`Main: ${randomMain.name} (${randomMain.cuisine})`);
    console.log(`Dessert: ${randomDessert.name} (${randomDessert.cuisine})`);

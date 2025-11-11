
// Importing Dish Data and Utilities
import { dishes } from './data.js';
import { filterArr, randomiser } from './utils.js';

// Generate Random Order Number
const orderNo = Math.floor(Math.random() * 999);
    
// User Dietary Preference

const diets = [...new Set(dishes.map(dish => dish.dietary))];
const userInput = randomiser(diets);

// New Filtering: Reduce dishes based on dietary preference
const groups = dishes.reduce((acc, dish) => {
    if (!acc[dish.dietary]) acc[dish.dietary] = {};
    if (!acc[dish.dietary][dish.dish]) acc[dish.dietary][dish.dish] = [];
    acc[dish.dietary][dish.dish].push(dish);
    return acc;
}, {})

// Group Filtered Dishes by Course
const starters = groups[userInput]['Starter'];
const mains = groups[userInput]['Main'];
const desserts = groups[userInput]?.Dessert ? groups[userInput]['Dessert'] : groups['Vegan']['Dessert'] || [];

// Random Dish Selection
const starter = randomiser(starters);
const main = randomiser(mains);
const dessert = randomiser(desserts);

// Script Output
console.log(`Order No: ${orderNo}`);
console.log(`Dietary Preference: ${userInput}`);
console.log(`Starter: ${starter.name} (${starter.cuisine})`);
console.log(`Main: ${main.name} (${main.cuisine})`);
console.log(`Dessert: ${dessert.name} (${dessert.cuisine})`);


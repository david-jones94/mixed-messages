
// Importing Dish Data and Utilities
import { dishes } from './data.js';
import { filterArr, randomiser } from './utils.js';


// Generate Random Order Number
const orderNo = Math.floor(Math.random() * 999);
    
// User Dietary Preference

const diets = [...new Set(dishes.map(dish => dish.dietary))];
const userInput = randomiser(diets);

// New Filtering: Reduce dishes based on dietary preference
const groupedByDish = dishes.reduce((acc, dish) => {
    if (!acc[dish.dish]) acc[dish.dish] = [];
    acc[dish.dish].push(dish);
    return acc;
}, {});

const groupedByDiet = dishes.reduce((acc, dish) => {
    if (!acc[dish.dietary]) acc[dish.dietary] = [];
    acc[dish.dietary].push(dish);
    return acc;
}, {});

const grouped = dishes.reduce((acc, dish) => {
    if (!acc[dish.dietary]) acc[dish.dietary] = {};
    if (!acc[dish.dietary][dish.dish]) acc[dish.dietary][dish.dish] = [];
    acc[dish.dietary][dish.dish].push(dish);
    return acc;
}, {})

// Filter Dishes Based on Dietary Preference
const userDishes = groupedByDiet[userInput] || [];

// Group Filtered Dishes by Course

const starters = grouped[userInput]['Starter'];
const mains = grouped[userInput]['Main'];
const desserts = grouped[userInput]['Dessert'];
const veDesserts = grouped['Vegan']['Dessert'];

// Random Dish Selection
const starter = randomiser(starters);
const main = randomiser(mains);
const dessert = randomiser(desserts);
const veDessert = randomiser(veDesserts);

// Function to select Vegan/non-Vegan dessert
const randDesserts = () => {
          
    if (userInput === 'Vegan') {
        return veDessert;
    } else {
        return dessert;
    };
}


// Script Output
console.log(`Order No: ${orderNo}`);
console.log(`Dietary Preference: ${userInput}`);
console.log(`Starter: ${starter.name} (${starter.cuisine})`);
console.log(`Main: ${main.name} (${main.cuisine})`);
console.log(`Dessert: ${randDesserts().name} (${randDesserts().cuisine})`);

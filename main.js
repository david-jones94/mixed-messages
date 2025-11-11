
// Importing Dish Data
import { dishes } from './data.js';


// Helper Functions
const filterArr = (arr, key, value) => {return arr.filter(obj => obj[key] === value);}
const randomiser = (arr) => {return arr[Math.floor(Math.random() * arr.length)];}


const orderNo = Math.floor(Math.random() * 999);
    
// User Dietary Preference

const diets = [...new Set(dishes.map(dish => dish.dietary))];
const userInput = randomiser(diets);


// Filter Dishes Based on Dietary Preference
const userDishes = filterArr(dishes, 'dietary', userInput);
const starters = filterArr(userDishes, 'dish', 'Starter');
const mains = filterArr(userDishes, 'dish', 'Main');
const desserts = filterArr(dishes, 'dish', 'Dessert');
const veDesserts = filterArr(userDishes, 'dish', 'Dessert');

// Random Selection
const starter = randomiser(starters);
const main = randomiser(mains);
const dessert = randomiser(desserts);
const veDessert = randomiser(veDesserts);


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

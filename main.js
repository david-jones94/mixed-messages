


// Data Sets for Meal Randomiser Program

const dietaryPreferences = ['Vegetarian', 'Vegan', 'Pescetarian', 'No Preference']
const vegan = ['Tofu', 'Lentil', 'Chickpea', 'Tempeh'];
const vegetarian = [...vegan, 'Egg', 'Paneer', 'Greek Yogurt'];
const pescetarian = [...vegetarian, 'Salmon', 'Tuna', 'Shrimp'];
const meat = [...pescetarian, 'Chicken', 'Beef', 'Turkey', 'Lamb'];
const carbs = ['Rice', 'Quinoa', 'Couscous', 'Barley'];
const vegetables1 = ['Broccoli', 'Spinach', 'Carrots', 'Zucchini', 'Asparagus'];
const vegetables2 = ['Bell Peppers', 'Mushrooms', 'Cauliflower', 'Green Beans', 'Brussels Sprouts'];
const dishTypes = ['Curry', 'Stew', 'Pasta', 'Salad', 'Soup']
const vegDishTypes = ['Blanched', 'Roasted', 'Steamed', 'Sautéed']
const garnish = ['Pea Puree', 'Toasted Almonds', 'Lemon and Thyme', 'Truffle Oil','Fresh Herbs'];
const signOffMessages = ['Bon Appétit!', 'Enjoy your meal!', 'Happy Cooking!', 'Savor the flavors!'];
const cuisines = ['Italian', 'Middle Eastern', 'Indian', 'Thai', 'Mediterranean', 'Mexican'];



// Random Meal Generator Function
const randomiser = () => {

    const sDiet = dietaryPreferences[Math.floor(Math.random() * dietaryPreferences.length)];
    
    // Function to select protein based on dietary preference
    const sProtein =() => {
        if (sDiet === 'No Preference') {
            return meat[Math.floor(Math.random() * meat.length)]      
        } else if (sDiet === 'Pescetarian') {
            return pescetarian[Math.floor(Math.random() * pescetarian.length)]
        } else if (sDiet === 'Vegetarian') {
            return vegetarian[Math.floor(Math.random() * vegetarian.length)]
        } else {
            return vegan[Math.floor(Math.random() * vegan.length)]}};


    const sCarb = carbs[Math.floor(Math.random() * carbs.length)];
    const sVegetable1 = vegetables1[Math.floor(Math.random() * vegetables1.length)];
    const sVegetable2 = vegetables2[Math.floor(Math.random() * vegetables2.length)];
    const sDishType = dishTypes[Math.floor(Math.random() * dishTypes.length)];
    const sGarnish = garnish[Math.floor(Math.random() * garnish.length)];
    const sVegDishType = vegDishTypes[Math.floor(Math.random() * vegDishTypes.length)];
    const sSignOff = signOffMessages[Math.floor(Math.random() * signOffMessages.length)];
    const sCuisine = cuisines[Math.floor(Math.random() * cuisines.length)];
    

    console.log(`Chosen Dietary Preference: ${sDiet}`);  
    
    // Final Meal Output
    if (sCuisine === 'Italian') {
        console.log(`For your dish, you must prepare an ${sCuisine} inspired ${sProtein()} ${sDishType}, ${sVegDishType} ${sVegetable1} and ${sVegetable2}, garnished with ${sGarnish} and a side of ${sCarb}. ${sSignOff}`)
    } else {
        console.log(`For your dish, you must prepare a ${sCuisine} inspired ${sProtein()} ${sDishType}, ${sVegDishType} ${sVegetable1} and ${sVegetable2}, garnished with ${sGarnish} and a side of ${sCarb}. ${sSignOff}`);
    }

}

// Invoke Meal
randomiser();

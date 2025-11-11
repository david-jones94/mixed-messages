


// Data Sets for Meal Randomiser Program
const dishes = [    
        { name: 'Shrimp Cocktail', dish: 'Starter', cuisine: 'Brtish', dietary: 'Pescetarian' },
        { name: 'Chicken Wings', dish: 'Starter', cuisine: 'Korean', dietary: 'No Preference' },
        { name: 'Smoked Salmon', dish: 'Starter', cuisine: 'French', dietary: 'Pescetarian' },
        { name: 'Caprese Salad', dish: 'Starter', cuisine: 'Italian', dietary: 'Vegetarian' },
        { name: 'Bruscetta', dish: 'Starter', cuisine: 'Italian', dietary: 'Vegetarian' },
        { name: 'Stuffed Mushrooms', dish: 'Starter', cuisine: 'British', dietary: 'Vegetarian' },
        { name: 'Hummus Platter', dish: 'Starter', cuisine: 'Middle Eastern', dietary: 'Vegan' },
        { name: 'Guacamole with Chips', dish: 'Starter', cuisine: 'Mexican', dietary: 'Vegan' },
        { name: 'Roasted Red Pepper Soup', dish: 'Starter', cuisine: 'Mediterranean', dietary: 'Vegan' },
        { name: 'Grilled Chicken Salad', dish: 'Main', cuisine: 'American', dietary: 'No Preference' },
        { name: 'Beef Stir Fry', dish: 'Main', cuisine: 'Chinese', dietary: 'No Preference' },
        { name: 'Vegetable Curry', dish: 'Main', cuisine: 'Indian', dietary: 'Vegan' },
        { name: 'Quinoa Salad', dish: 'Main', cuisine: 'Middle Eastern', dietary: 'Vegetarian' },
        { name: 'Lentil Soup', dish: 'Main', cuisine: 'Brtish', dietary: 'Vegan' },      
        { name: 'Seared Tuna', dish: 'Main', cuisine: 'Japanese', dietary: 'Pescetarian' },
        { name: 'Pasta Primavera', dish: 'Main', cuisine: 'Italian', dietary: 'Vegetarian' },
        { name: 'Tofu Stir Fry', dish: 'Main', cuisine: 'Thai', dietary: 'Vegan' }
    ];

    const orderNo = Math.floor(Math.random() * 999)
    
    let userInput = 'Vegan';
    const userDishes = dishes.filter(dish => dish.dietary === userInput)
    const starter = userDishes.filter(dish => dish.dish === 'Starter')
    const main = userDishes.filter(dish => dish.dish === 'Main')

    const randomStarter = starter[Math.floor(Math.random() * starter.length)];
    const randomMain = main[Math.floor(Math.random() * main.length)];

    console.log(`Order No: ${orderNo}`);
    console.log(`Deitary Preference: ${userInput}`);
    console.log(`Starter: ${randomStarter.name} (${randomStarter.cuisine})`);
    console.log(`Main: ${randomMain.name} (${randomMain.cuisine})`);
    
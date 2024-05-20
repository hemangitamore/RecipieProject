// src/component/Recipes.js
import React from 'react';
import RecipeList from './RecipeList';

// Sample data for recipes
const recipes = [
    {
        idMeal: '52772',
        strMeal: 'Teriyaki Chicken Casserole',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
        strInstructions: 'Preheat oven to 350 degrees F. Prepare the teriyaki sauce...'
    },
    {
        idMeal: '52773',
        strMeal: 'Spaghetti Carbonara',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg',
        strInstructions: 'Boil pasta in salted water until al dente...'
    },
    // Add more recipe objects as needed
];

const Recipes = () => {
    return (
        <div className="container mt-5">
            <h1>Recipes</h1>
            <RecipeList recipes={recipes} />
        </div>
    );
};

export default Recipes;

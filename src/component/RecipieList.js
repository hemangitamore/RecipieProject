// src/components/RecipeList.js
import React from 'react';
import { Row, Container } from 'react-bootstrap';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => {
    return (
       <div className="App">
        <header className="Appheader">
            <div className="wrapper">
            {recipes.map((recipe) => (
                    <RecipeCard key={recipe.idMeal} recipe={recipe} />
                    
                ))}

            </div>
        </header>
       </div>
    );
};

export default RecipeList

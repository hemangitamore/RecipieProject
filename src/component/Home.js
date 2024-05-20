/*import { useEffect, useState } from "react"
import RecipeCard from "./RecipeCard";

const apiUrl="www.themealdb.com/api/json/v1/1/search.php?s=";

export function Home(){
  const [isLoading,setIsLoading] =useState(false);
  const [query,setQuery]=useState("");
  const [recipies,setRecipies]= useState([]);

  const searchRecipies =async ()=>{
    setIsLoading(true);
    const Url =apiUrl +query;
    const res =await fetch(Url);
    const data=await res.json();
    setRecipies(data.meals);
    setIsLoading(false);

  };

  useEffect(() =>{
    searchRecipies();
  },[]);

  return(
    <div className="container">
        <h2>Our Recipies</h2>
        <div className="recipes">
            {recipies
            ? recipies.map(recipe=>(
              <RecipeCard
              key={recipe.idMeal} recipe={recipe} />
            )):"No recipies"}
        </div>

    </div>
  );
}*/

/*import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import SearchBar from "./SearchBar";

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    setIsLoading(true);
    try {
      const url = apiUrl + query;
      const res = await fetch(url);
      const data = await res.json();
      setRecipes(data.meals || []); // Handle case where data.meals is null
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipes([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes();
  }, []);

  return (
    <div className="container mt-3">
      <h2>Our Recipes</h2>
      <SearchBar/>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))
          ) : (
            <p>No recipes found</p>
          )}
        </div>
      )}
    </div>
  );
}*/


import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Image } from 'react-bootstrap';
import RecipeCard from './RecipeCard';
import '../App.css';

const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    setIsLoading(true);
    try {
      const url = apiUrl + query;
      const res = await fetch(url);
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setRecipes([]);
    }
    setIsLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchRecipes(query);
  };

  useEffect(() => {
    // Fetch initial recipes when the component mounts
    searchRecipes('chicken');
  }, []);


  

  return (
    <Container className="text-white">
    <div  className='background'>
    <div className="container ">
      <h2 className="justify-content text-white">Cook Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for recipes..."
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary mb-4">
          Search
        </button>
      </form>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))
          ) : (
            <p>No recipes found</p>
          )}
        </div>
      )}
    </div>
    </div>

    </Container>
  );
}


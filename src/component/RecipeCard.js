/*import React from "react";

const RecipeCard=(props)=>{
    const {idMeal,strMeal,strCategory,strMealThumb}=recipe;
   
   
    return(
        <div className="card">

      <img src={strMealThumb} alt={strMeal} className="card-image"/>
      <div className="card-body">
        <span className="category">{strCategory}</span>
            <h3>{strMeal}</h3>
            <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank">Ingreadiants</a>
      </div>
        </div>
    )
}

export default RecipeCard;*/

// src/components/RecipeCard.js
/*import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const RecipeCard = ({ recipe }) => {
    return (
        <Row  className="justify-content-center mt-5">
       <Col lg={3} className="mb-4">
        
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={recipe.strMealThumb} />
            <Card.Body>
                <Card.Title>{recipe.strMeal}</Card.Title>
                <Card.Text>{recipe.strInstructions.slice(0, 100)}...</Card.Text>
            </Card.Body>
        </Card>
        
       </Col>

       </Row>
    );
};

export default RecipeCard;*/

// src/components/RecipeCard.js
/*import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const RecipeCard = ({ recipe }) => {
    return (
       
       <Row className="card">
        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
            <Card className="card">
                <Card.Img variant="top" src={recipe.strMealThumb} />
                <Card.Body>
                    <Card.Title>{recipe.strMeal}</Card.Title>
                    <Card.Text>{recipe.strInstructions.slice(0, 100)}...</Card.Text>
                </Card.Body>
            </Card>
        </Col>
        </Row>
        
    );
};

export default RecipeCard;*/

/*const RecipeCard =({recipe})=>{
    const {idMeal,strMeal,strCategory,strMealThumb} =recipe;
    return(
        <div className="card">
            <img
             src={strMealThumb}
             alt={strMeal}
             className="card-image"
            />
           
         <div className="card-body">
            <span className="category">{strCategory}</span>
            <h3>{strMeal}</h3>
            <a href={"https://www.themealdb.com/meal/" + idMeal} >Ingreadiants</a>

         </div>
        </div>
    )

}
export default RecipeCard;*/

// src/components/RecipeCard.js
/*import React from 'react';
import { Card, Col } from 'react-bootstrap';


const RecipeCard = ({ recipe }) => {
  return (
    <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
      <Card className="recipe-card">
        <Card.Img variant="top" src={recipe.strMealThumb} />
        <Card.Body className="hoverEffect">
          <Card.Title>{recipe.strMeal}</Card.Title>
          <Card.Text>{recipe.strInstructions.slice(0, 100)}...</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RecipeCard;*/

import React from 'react';
import { Card, Col } from 'react-bootstrap';

const RecipeCard = ({ recipe }) => {
  const cardStyle = {
    width: '18rem',
    transition: 'background-color 0.3s ease',
    position: 'relative',
  };

  const hoverEffectStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the color and opacity as needed
    opacity: 0, // Initially invisible
    transition: 'opacity 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff', // Adjust the text color
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector('.hoverEffect').style.opacity = 1;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector('.hoverEffect').style.opacity = 0;
  };

  return (
    <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
      <Card style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Card.Img variant="top" src={recipe.strMealThumb} />
        <Card.Body>
          <Card.Title>{recipe.strMeal}</Card.Title>
          <Card.Text>{recipe.strInstructions.slice(0, 100)}...</Card.Text>
          <div className="hoverEffect" style={hoverEffectStyle}>
            Hover Effect Text
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RecipeCard;




import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RecipePage() {
    const { recipeId } = useParams();
    const[recipe, setRecipe] = useState(null);

    useEffect(() => {
        axios.get(`/api/recipes/${recipeId}`)
            .then(response => {
                setRecipe(response.data);
            })
            .catch(error => {
                console.error('Ошибка извлечения рецепта:', error);
            });
    }, [recipeId]);

    if (!recipe) {
        return <div>Загрузка...</div>;
    }

    return (
        <div>
            <h2>Рецепты</h2>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
        </div>
    );
}

export default RecipePage;
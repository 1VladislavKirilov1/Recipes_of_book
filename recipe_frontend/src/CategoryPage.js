import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CategoryPage() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('/api/categories/')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Ошибка извлечения категорий:', error);
            });
    }, []);

    return (
        <div>
            <h2>Категории</h2>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>
                        <strong>{category.name}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CategoryPage;
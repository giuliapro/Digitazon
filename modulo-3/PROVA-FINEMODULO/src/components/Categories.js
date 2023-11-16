import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then((response) => response.json())
            .then((data) => {
                setCategories(data);
            })
            .catch((error) => {
                console.error('Errore nella richiesta API:', error);
            });
    }, []);

    return (
        <div className="sidebar">
            <h2>Categorie prodotti</h2>
            <div className='category-list'>
                {categories.map((category) => (
                    <p key={category}>
                        <Link to={`/products/${category}`}>{category}</Link>
                    </p>
                ))}
            </div>
        </div>
    );
}
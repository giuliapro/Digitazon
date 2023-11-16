import React from 'react';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

export default function Products() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        // Esegui la richiesta API per ottenere i prodotti della categoria selezionata
        fetch(`https://dummyjson.com/products/category/${category}`)
            .then((response) => response.json())
            .then((data) => {
                const categoryProducts = data.products.filter((product) => product.category === category);
                setProducts(categoryProducts);
            })
            .catch((error) => {
                console.error('Errore nella richiesta API:', error);
            });
    }, [category]);

    function addToCart(item) {
        setCart([...cart, item]);
    }

    const quantProducts = calcQuant(cart);
    const totalPrice = quantProducts.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

    function calcQuant(arr) {
        let res = []
        for (let i = 0; i < arr.length; i++) {
            let current = arr[i]
            current.quantity = 1
            for (let j = (i + 1); j < arr.length; j++) {
                let current2 = arr[j]
                if (current.id === current2.id) {
                    current.quantity += 1
                }
            }
            if (!checkIfItemAlreadyPresent(res, current)) {
                res.push(current)
            }

        }
        return res
    }

    function checkIfItemAlreadyPresent(arr, product) {
        for (let i = 0; i < arr.length; i++) {
            let current = arr[i]
            if (current.id === product.id) {
                return true
            }
        }
        return false
    }

    return (
        <>
            <div className='main'>
                <div className="products">
                    <h2>Prodotti nella categoria: {category}</h2>
                    <div className='products-wrapper'>
                        {products.map((product) => (
                            <div key={product.id} className='single-product'>
                                <h3>{product.title}</h3>
                                <img
                                    className='img-product'
                                    src={product.thumbnail} />
                                <p>{product.description}</p>
                                <p>Prezzo: {product.price}€</p>
                                <button className="button" onClick={() => addToCart(product)}>Aggiungi al carrello</button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="cart">
                    <div>
                        <h2>Carrello</h2>
                        <div className="product-cart">
                            {quantProducts.map(product => <div className="single-product-cart">
                                <h4>{product.title}</h4>
                                <img
                                    className='img-product-cart'
                                    src={product.thumbnail} />
                                <p>Quantità: {product.quantity}</p>
                                <span>{product.price * product.quantity}$</span>
                            </div>)}
                        </div>
                    </div>


                    <br></br>
                    <h3 className='total'>Spesa totale: {totalPrice}$</h3>
                </div>
            </div>

        </>
    );
}
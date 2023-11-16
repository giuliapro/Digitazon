import { useState, useEffect } from 'react'

export default function Categories() {
    const [categories, setCategories] = useState([])
    let elements = []
    useEffect(() => {
        async function get() {
            let response = await fetch('https://fakestoreapi.com/products/categories')
            let categories = await response.json()
            elements = categories.map(async category => {
                let response = await fetch('https://fakestoreapi.com/products/category/' + category)
                let elementsByCategory = await response.json()
                return { name: category, products: elementsByCategory }
            })
            elements = await Promise.all(elements)
            setCategories(elements)
        }
        get()
    }, [])
    return (
        <>
            <h1>Categories</h1>
            <ul>
                {categories.map(category => {
                    return (
                        <div>
                            <h3>{category.name}</h3>
                            <ul>
                                {category.products.map(product => <li>{product.title}</li>)}
                            </ul>
                        </div>
                    )
                })}
            </ul>
        </>
    )
}

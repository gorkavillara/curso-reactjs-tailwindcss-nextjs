import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get('https://fakestoreapi.com/products')
            .then(r => setProducts(r.data))
            .catch(e => console.error(e))
            .finally(() => setLoading(false))
    }, [])
    return (
        <div>{loading ? <h3>Cargando...</h3>
            : (products.length > 0
                ? <div>
                    <h2 className="italic">Estos son los productos</h2>
                    <ul className="text-sm">
                        {products.map((product, i) => (
                            <li key={i}>
                                <Link href={`/products/${product.id}`}>{product.title}</Link>
                            </li>)
                        )
                        }
                    </ul>
                </div>
                : <h1>No hay productos</h1>)}


        </div>
    )
}

export default Products

import { useEffect, useState, useMemo } from 'react'
import axios from "axios";

const MemoComponent = () => {
    const [products, setProducts] = useState([]);
    const [toggle, setToggle] = useState(false);

    useEffect(async () => {
        const res = await axios.get('https://fakestoreapi.com/products')
            .catch(e => console.log(e));
        // console.log(res.data);
        setProducts(res.data);
    }, [])

    const findLongestName = products => {
        if (products.length === 0) return null;
        let longestName = "";
        for (let i = 0; i < products.length; i++) {
            let product = products[i];
            if (longestName.length < product.title) {
                longestName = product.title;
            }
        }
        console.log('Se ha ejecutado');
        return longestName;
    }

    const memoLongestName = useMemo(() => findLongestName(products), [products]);
    // findLongestName(products);
    return (
        <div>
           <h1>Estamos en el memocomponent</h1> 
           <button onClick={() => setToggle(!toggle)}>Toggle</button>
        </div>
    )
}

export default MemoComponent

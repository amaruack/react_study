import {useContext, useEffect, useState} from "react";
import useProduct from "../../hooks/useProduct";

export const Product = () => {

    const [checked, setChecked] = useState(false);
    const [loading, error, products] = useProduct(checked);

    const handleChange = () =>{
        setChecked(prevState => !prevState);
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    return (
        <>
            <input id={'checkbox'} type={'checkbox'} value={checked} onChange={handleChange}/>
            <label htmlFor={'checkbox'}>세일항목만 보기</label>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </>
    )
}
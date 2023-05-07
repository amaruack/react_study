import {useEffect, useState} from "react";

export const Product = () => {

    const [checked, setChecked] = useState(false);
    const [products, setProducts] = useState([]);

    const handleChange = () =>{
        setChecked(prevState => !prevState);
    }

    useEffect(() => {
        fetch(`data/${checked ? 'sales.json': 'products.json'}`)
            .then(r => r.json() )
            .then((data) => {
                console.log('dtaa');
                setProducts(data);
            });
        // unmount 될때 호출 되는 함수
        return () => {
            console.log('깨끗이 청소');
        };
    }, [checked]);

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
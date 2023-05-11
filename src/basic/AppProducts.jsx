import './App.css';
import {useContext, useEffect, useState} from "react";
import {Product} from "./component/Product";
import {Loading} from "./component/Loading";
import useProduct from "../hooks/useProduct";

export default function AppProducts() {

    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(prevState => !prevState);
    }
    return (
        <div className={'container_product'}>
            {show && <Product></Product>}
            <button onClick={handleClick}>Toggle</button>
        </div>

    );
}

import './App.css';
import {useState} from "react";
import {Product} from "./component/Product";

export default function AppProducts() {

    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(prevState => !prevState);
    }
    return (
        <div className={'container'}>
            {show &&  <Product></Product>}
            <button onClick={handleClick}>Toggle</button>
        </div>
    );
}

import './App.css';
import {Counter} from "./component/Counter";
import {useState} from "react";

export default function AppCounter() {
    const [totalCount, setTotalCount] = useState(0);

    const clickHandler = () => {
        setTotalCount((prev) => prev+1);
    }

    return (
        <div className={'container'}>
            <div className={'banner'}>
                Total Count : {totalCount} {totalCount > 10 ? 'Fire' : 'Cold'}
            </div>
            <div className={'counters'}>
                <Counter
                    totalCount = {totalCount}
                    setTotalCount = {clickHandler}
                ></Counter>
                <Counter
                    totalCount = {totalCount}
                    setTotalCount = {clickHandler}
                ></Counter>
            </div>
        </div>
    );
}

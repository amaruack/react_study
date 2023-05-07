import React, {useState} from "react";

export const Counter = (props) => {

    let totalCount = props.totalCount;
    let setTotalCount = props.setTotalCount;

    const [count, setCount] = useState(() => 0);
    
    const clickHandler = () => {
        // setCount(count+1);
        setCount((prev) => prev+1);
        setTotalCount();
    };

    return (
        <div className={'counter'}>
            <span className={'number'}>{count} / <span className={'total'}>{totalCount}</span></span>
            <button className={'button'} onClick={clickHandler} >Add +</button>
        </div>
    )
}

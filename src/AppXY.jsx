import './AppXY.css';
import {useState} from "react";

export default function AppXY() {

    const [position, setPosition] = useState({x:0, y:0});

    const mouseMoveHandler = (event) =>{
        // console.log(event);
        // setPosition( { x:event.clientX, y:event.clientY});
        // setPosition( prevState => {
        //     return {x:event.clientX, y:prevState.y}
        // });
        // setPosition( prevState => ({x:event.clientX, y:prevState.y}));
        setPosition( prevState => ({...prevState, x:event.clientX}));
    }

    return (
        <div className={'container'} onPointerMove={mouseMoveHandler} >
            {/*<div className={'pointer'} style={{left:left, top:top} } ></div>*/}
            <div className={'pointer'} style={{transform:`translate(${position.x}px, ${position.y}px)`} } ></div>
        </div>
    );
}

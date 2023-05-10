import React from "react";

export const Avatar = (props) => {
    return (
        <div className={'avatar'}>
            <img className={'photo'}
                 src={props.image}
                 alt ='avatar'
            />
            {
                props.isNew && <span className={'isNew'}>new</span>
            }
        </div>
    )
}

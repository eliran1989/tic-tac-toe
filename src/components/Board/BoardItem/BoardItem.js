import React from 'react'
import classes from './BoardItem.module.css';

export default function BoardItem(props) {
   
    const itemClass = [classes.BoardItem];

    if(props.wonItem){
        itemClass.push(classes.WonItem)
    }

    return (
        <div className={itemClass.join(" , ")}  onClick={()=>props.onClickItem(props.row , props.col)}>
            <div>
                {props.value}
            </div>
        </div>
    )
}

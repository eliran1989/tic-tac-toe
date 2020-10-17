import React from 'react'
import classes from './BoardItem.module.css';

export default function BoardItem(props) {

    return (
        <div className={classes.BoardItem} onClick={()=>props.onClickItem(props.row , props.col)}>
            <div>
                {props.value}
            </div>
        </div>
    )
}
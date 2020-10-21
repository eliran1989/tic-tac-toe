import React from 'react'
import classes from './Board.module.css'
import BoardItem from './BoardItem/BoardItem'
import {connect} from 'react-redux'


const Board = (props) => {


    const items = []
    

    for (let index = 0 , row =-1; index < 9; index++) {

        let wonItem=false;
        const col = (index%3===0 ? 0 : index%3)

        if(index%3===0){
            row++;
        }


        for (let index = 0; index < props.wonItems.length; index++) {
            const element = props.wonItems[index];

            if(element[0] === row && element[1] === col){
                wonItem=true;
                break;
            }
        }

        console.log(row , index%3===0 ? 0 : index%3 , wonItem)

        
        items.push(<BoardItem col={col} row={row} onClickItem={props.onClickItem} value={props.board[row][col]} key={`item${index}`} index={index} wonItem={wonItem}/>);
    }

    return (
        <div>
        { 

            <div className={classes.Board}>
                {items}
                {
                    props.won &&
                    <div className={classes.WonAlert}>
                        <button onClick={()=>props.resetGame()}>Click for new game</button>
                    </div>
                }
            </div>
        }
        </div>
    )

}



const mapStateToProps = state =>{
    return {
        board:state.board,
        won:state.won,
        wonItems:state.wonItems
    }
}

const mapDispatchToProps = dispatch =>{

    return {
        onClickItem : (row , col) => dispatch({type:"CLICKITEM" , payload:{col:col , row:row}}),
        resetGame: () => dispatch({type:"RESET"})

    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(Board)

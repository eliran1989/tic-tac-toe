const initialState = {
    board:[
        [],
        [],
        [],
    ],
    whoPlay:"O"
}

const reducer = (state = initialState , action) => {

switch (action.type) {
    case "CLICKITEM":

        const updatedBoard = [
            ...state.board
        ]



        if(!updatedBoard[action.payload.row][action.payload.col]){
            
            updatedBoard[action.payload.row][action.payload.col] = (state.whoPlay==="X")?"O":"X";
            
            console.log(updatedBoard)

            state = {
                ...state,
                board:updatedBoard,
                whoPlay:(state.whoPlay==="X")?"O":"X"
            }

        }

        break;

    default:
        break;
}

return state;


}

export default reducer;
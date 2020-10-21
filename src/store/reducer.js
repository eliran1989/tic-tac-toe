const initialState = {
    board:[
        [],
        [],
        [],
    ],
    wonItems:[],
    whoPlay:"O"
}

const reducer = (state = initialState , action) => {

switch (action.type) {
    case "CLICKITEM":

        const updatedBoard = [
            ...state.board
        ]



        if(!updatedBoard[action.payload.row][action.payload.col] && !state.won){
        
            let currentPlay = (state.whoPlay==="X")?"O":"X";
            updatedBoard[action.payload.row][action.payload.col] = currentPlay;


          let wonFlag = false; 
          const wonIndexs = []; 

            
        switch (action.payload.col) {
            case 0:
                if(state.board[action.payload.row][1]===currentPlay && state.board[action.payload.row][2]===currentPlay){
                    wonFlag=true;

                    wonIndexs.push([action.payload.row , 1] ,[action.payload.row , 2])
                }

 

                break;
            case 1:              
                if(state.board[action.payload.row][0]===currentPlay && state.board[action.payload.row][2]===currentPlay){
                    wonFlag=true;
                    wonIndexs.push([action.payload.row , 0] ,[action.payload.row , 2])
                }
            
                break;
            case 2:
                if(state.board[action.payload.row][0]===currentPlay && state.board[action.payload.row][1]===currentPlay){
                    wonFlag=true;
                    wonIndexs.push([action.payload.row , 0] ,[action.payload.row , 1])
                }

                break;
        
            default:
                break;
        }
        
        if(!wonFlag)
        switch (action.payload.row) {
            case 0:
                if(state.board[1][action.payload.col]===currentPlay && state.board[2][action.payload.col]===currentPlay){
                    wonFlag = true;
                    wonIndexs.push([1 ,action.payload.col],[2 ,action.payload.col])
                }
                break;
            case 1:       
                if(state.board[0][action.payload.col]===currentPlay && state.board[2][action.payload.col]===currentPlay){
                    wonFlag = true;
                    wonIndexs.push([0 ,action.payload.col],[2 ,action.payload.col])
                }             
                break;
            case 2:
                if(state.board[0][action.payload.col]===currentPlay && state.board[1][action.payload.col]===currentPlay){
                    wonFlag = true;
                    wonIndexs.push([0 ,action.payload.col],[1 ,action.payload.col]) 
                }
                break;
        
            default:
                break;
        }


        if(!wonFlag && (action.payload.col===action.payload.row || Math.abs(action.payload.row - action.payload.col)===2)){

            let center = state.board[1][1]===currentPlay

           

            switch (action.payload.col) {
                case 0:
                    if(center && state.board[(action.payload.row === 2) ? 0 : 2][2]===currentPlay){
                        wonFlag=true;
                        wonIndexs.push([(action.payload.row === 2) ? 0 : 2 ,2])
                    }

                    break;
                case 1:
                    if(state.board[0][2]===currentPlay && state.board[2][0]===currentPlay){
                        wonFlag=true;
                        wonIndexs.push([2 ,0])
                    }

                    break;
                case 2:
                    if(center && state.board[(action.payload.row === 2) ? 0 : 2][0]===currentPlay){
                        wonFlag=true;
                        wonIndexs.push([(action.payload.row === 2) ? 0 : 2 ,0])
                    }

                    break;
            
                default:
                    break;
            }


            if(wonFlag)
            wonIndexs.push([1,1])


        }


        if(wonFlag)
        wonIndexs.push([action.payload.row , action.payload.col]);
        

            

            state = {
                ...state,
                board:updatedBoard,
                whoPlay:currentPlay,
                won:wonFlag,
                wonItems:wonIndexs
            }

        }

        break;

        case "RESET":

            state = {
                board:[
                    [],
                    [],
                    [],
                ],
                wonItems:[],
                whoPlay:"O"
            }

        break;

    default:
        break;
}

return state;


}

export default reducer;
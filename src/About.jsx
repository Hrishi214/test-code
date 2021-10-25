import React from 'react'
import { useReducer } from 'react';

    const Reducer=(state,action)=>{


        if(action.type ==="increment"){

           return state+1;
        }
        if(action.type ==="decrement"){

           return  state-1;
        }
        return state;
    }
    
const UseReducer=()=>{

    const [state, dispatch] = useReducer(Reducer, 0);
    return(

        <>
        <p>initial count is {state}</p>
        <button  onClick={()=>dispatch({type:"increment"})}>inc</button>
        <button onClick={()=>dispatch({type:"decrement"})}>dec</button>

</>

    )


}

export default UseReducer

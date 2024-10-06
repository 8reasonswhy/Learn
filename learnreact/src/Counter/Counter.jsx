import { useState } from "react";

export default function Counter () {
       
    const [count,setcount]=useState(0);

    return (
        <dive>
            <button onClick={()=>{
                setcount(prevState => {return prevState + 1})
            }}
            >Incrémenter</button>
            <button onClick={()=>{
                return setcount (0) ;
            }}>Reset</button>
            <span>{count}</span>
        </dive>
                
    )


}
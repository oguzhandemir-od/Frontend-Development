import {useState} from "react";

function FunctionComponentsTutorials(props){
    
    const [count,setCount]=useState(0);

    // CDM

    // Event
    const countPlusHandleClick=()=>{
        setCount(count+1);
    }

    const countMinusHandleClick=()=>{
        setCount(count-1);
    }

    
        return(
            <div>
            <h1>
                Function Component</h1>
                <p>Count: {count}</p>
                <button className="btn btn-primary" onClick={countPlusHandleClick}>+</button>
                <button className="btn btn-danger ms-2" onClick={countMinusHandleClick}>-</button>

                </div>
        );
    
}

export default FunctionComponentsTutorials;
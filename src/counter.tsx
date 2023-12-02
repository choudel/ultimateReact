import { useState, useEffect, useLayoutEffect } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
    const [bool, setBool] = useState(false);
    useLayoutEffect(()=>{
        if(count===3){
            setCount(4)
        }
    },[count])
    useEffect(()=>{
       
        console.log('mounted')
        
        return ()=>console.log('unmount')
    },[])
    useEffect(()=>{
        console.log('render')
    })
    
    return(
        <div className="counter">
            <button onClick={()=>setBool(!bool)}>Re-render</button>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <p>Count: {count}</p>
        </div>
    )
}
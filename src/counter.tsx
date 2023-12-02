import { forwardRef, useRef } from "react";

export default function Counter(){
    const inputRef = useRef<HTMLInputElement | null>(null);
    const focusInput = () =>{
        inputRef.current?.focus()
    }
    return(
        <>
        <MyInput ref={inputRef}></MyInput>
        <button onClick={focusInput}>Focus</button>
        </> 
    )
}

const MyInput = forwardRef<HTMLInputElement>((props,ref)=>{
    return <input ref={ref} {...props} style={{color:'red'}}></input>
})
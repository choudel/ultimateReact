import { useState, useRef } from "react";

export default function Counter(){
    const [seconds, setSeconds] = useState(0);
    const timerID = useRef<ReturnType<typeof setInterval> | null>(null);
    const startTimer = ()=>{
        timerID.current = setInterval(()=>{
            setSeconds(currentSeconds => currentSeconds+1)
        },1000)
    }
    const stopTimer =()=>{
        clearInterval(timerID.current!)
    }
    return(
        <div className="counter">
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <p>seconds: {seconds}</p>
        </div>
    )
}
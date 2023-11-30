import { useReducer, useState } from 'react'

import './App.css'

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <SayHello></SayHello>
        <Input></Input>
        <MyButton onClick={handleClick}>click me!</MyButton> 
        <BigProp name={"chouchou"}></BigProp>
        <BigProp></BigProp>
        <Comment username="chouaib" time={(new Date().toString())}>
          <p>Helllo one</p>
        </Comment>
        <Incrementor count={count} setCount={setCount}></Incrementor>
        <Redux></Redux>
      </div>
      
    </>
  )
}
function SayHello(){
  const name ="chouaib"
  return (<><p style={{color:'blue'}}
  >Hello</p> <h1>{name.toUpperCase()}</h1></>)
}
function MyButton(props){
    return(
    <>
    <button {...props} style={{background:'purple'}}/>    
    </>
  )
}
const handleClick=(event)=>{
   console.log(event)
  }
function Input(){
  const props = {
    id:"input",
    type:"text",
    maxLength:5
  }
  return(<>

  <label htmlFor="input">Put something:</label>
  <input {...props} />
  </>)
} 
interface BigProps{
  name:string;
}
function BigProp({name}:BigProps){
  return(
    <>
    <p>Hello:{name}</p>
    </>
  )
}
BigProp.defaultProps={
  name:'User'
}
interface CommentProps{
  username:string;
  time:string;
  children:React.ReactNode;
}
function Comment({username,time,children}:CommentProps){
  return(
    <section>
      <p>{username} commented at {time}</p>
      {children} 
    </section>
  )
}
interface IncrementorProp{
  count:number;
  setCount:(value: number) => void;
}
function Incrementor({count,setCount}:IncrementorProp){
  
  return(
    <>
    <button onClick={()=>setCount(count+3)}>increment 3</button>
    <h3>{count}</h3>
    </>
  )
}

function reducer(state:{count:number}, action:{type:string,num:number}){
  switch( action.type){
    case "increment":
      return{count: state.count + action.num};
    case "decrement": 
      return {count: state.count - action.num};
    default:
      throw new Error("something wrong")
  }
}

function Redux(){
  const [state,dispatch] = useReducer(reducer,{
    count:10
  });  
  return(
  <>
  <button onClick={()=>dispatch({type:"increment",num:2})}>Increment:{state.count} </button>
  <button onClick={()=>dispatch({type:"decrement",num:1})}>Decrement: {state.count} </button>
  </>
  )
}
export default App

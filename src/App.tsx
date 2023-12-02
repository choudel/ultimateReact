import { useState } from 'react'

import './App.css'
import Counter from './counter'

function App() {
  
  const [isShown, setisShown] = useState(true)

  return (
    <>
    <button onClick={()=>setisShown(!isShown)}>
      {isShown? 'Hide Counter' : 'Show counter'}
    </button>
    {
      isShown? <Counter/> : null
    }
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [decrease, setDecrease] = useState(0)

  return (
    <div className="App">
      <h1>Simple React Counter</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increaser {count}
        </button>
        <button onClick={() => setDecrease((count) => count - 1)}>
          Decreaser {decrease}
        </button>
        
      </div>
      
    </div>
  )
}

export default App

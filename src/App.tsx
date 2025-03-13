import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((current) => {
      return (current + 1)
    })
  }
  const decrement = () => {
    setCount((current) => {
      return (current - 1)
    })
  }

  return (
    <>
      <div className="card">
        <button onClick={decrement}>Decrease count</button>
        <h1>{count}</h1>
        <button onClick={increment}>Increase count</button>
      </div>
    </>
  )
}

export default App

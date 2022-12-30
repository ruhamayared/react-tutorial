import "./App.css"
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  function increase() {
    setCount(count + 1)
  }
  function decrease() {
    setCount(count - 1)
  }
  function setToZero() {
    setCount(0)
  }

  return (
    <div className="App">
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={setToZero}>Set to Zero</button>

      <h1>{count}</h1>
    </div>
  )
}

export default App

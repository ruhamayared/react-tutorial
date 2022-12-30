import "./App.css"
import { useState } from "react"

function App() {
  const [textColor, setTextColor] = useState("")

  return (
    <div className="App">
      <h1>
        <button
          onClick={() => {
            setTextColor(textColor === "black" ? "red" : "black")
          }}
        >
          Show/Hide
        </button>
      </h1>
      <h1 style={{ color: textColor }}>Hi, my name is Ruhama.</h1>
    </div>
  )
}

export default App

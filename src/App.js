import "./App.css"
import { useState, useEffect } from "react"
import Axios from "axios"

function App() {
  const [name, setName] = useState("")
  const [predictedAge, setPredictedAge] = useState(null)

  function fetchData() {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data)
    })
  }

  return (
    <div className="App">
      <h1>
        <input
          placeholder="Name"
          onChange={(event) => {
            setName(event.target.value)
          }}
        />
      </h1>
      <button className="btn" onClick={fetchData}>
        💃🏾 Predict Age 💃🏾
      </button>

      <h3>Name: {predictedAge?.name}</h3>
      <h3>Predicted Age: {predictedAge?.age}</h3>
    </div>
  )
}

export default App

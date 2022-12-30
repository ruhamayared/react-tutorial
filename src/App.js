import "./App.css"
import { useState, useEffect } from "react"
import Axios from "axios"

function App() {
  //Fectching data normally in JS
  // fetch("https://catfact.ninja/fact")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data)
  //   })

  const [catFact, setCatFact] = useState("")

  function fetchCatFact() {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact)
    })
  }

  useEffect(() => {
    fetchCatFact()
  }, [])

  return (
    <div className="App">
      <button className="btn" onClick={fetchCatFact}>
        Generate Cat Fact 😸
      </button>
      <p>{catFact}</p>
    </div>
  )
}

export default App

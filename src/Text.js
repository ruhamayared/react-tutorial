import { useState, useEffect } from "react"

export default function Text() {
  const [text, setText] = useState("")

  useEffect(() => {
    console.log("Component mounted")

    return () => {
      console.log("Component unmounted")
    }
  }, [])

  return (
    <div>
      <input
        onChange={(event) => {
          setText(event.target.value)
        }}
      />

      <h1>{text}</h1>
    </div>
  )
}

import "./App.css"
import { useState } from "react"

function App() {
  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState("")

  function handleChange(event) {
    setNewTask(event.target.value)
  }

  function addTask() {
    const newTodoList = [...todoList, newTask] //New todo list will be old todo list with new task
    setTodoList(newTodoList) //Set the todo list to be the new todo list
  }

  return (
    <div className="App">
      <div className="addTask">
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((element, item) => {
          return <h1>{element}</h1>
        })}
      </div>
    </div>
  )
}

export default App

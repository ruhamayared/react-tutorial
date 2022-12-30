import "./App.css"
import { useState } from "react"

function App() {
  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState("")

  function handleChange(event) {
    setNewTask(event.target.value)
  }

  // function addTask() {
  //   const newTodoList = [...todoList, newTask] //New todo list will be old todo list with new task
  //   setTodoList(newTodoList) //Set the todo list to be the new todo list
  // }

  function addTask() {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    }
    setTodoList([...todoList, task])
  }

  function deleteTask(elementName) {
    const newTodoList = todoList.filter((element) => element !== elementName)
    setTodoList(newTodoList)
  }

  return (
    <div className="App">
      <div className="addTask">
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((element, item) => {
          return (
            <div>
              <h1>{element.taskName}</h1>
              <button onClick={() => deleteTask(element)}>🗑️</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App

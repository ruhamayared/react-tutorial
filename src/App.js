import "./App.css"
import { useState } from "react"
import Task from "./Task"

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
      completed: false,
    }
    setTodoList([...todoList, task])
  }

  function deleteTask(id) {
    const newTodoList = todoList.filter((element) => element.id !== id)
    setTodoList(newTodoList)
  }

  function completedTask(id) {
    let completeTask = todoList.map((element) => {
      return element.id === id
        ? { ...element, completed: !element.completed }
        : { ...element }
    })
    setTodoList(completeTask)
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
            <Task
              taskName={element.taskName}
              id={element.id}
              completed={element.completed}
              deleteTask={deleteTask}
              completedTask={completedTask}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App

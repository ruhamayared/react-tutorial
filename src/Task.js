export default function Task(props) {
  return (
    <div
      className="strike"
      style={{ textDecoration: props.completed ? "line-through" : "none" }}
    >
      <h1>{props.taskName}</h1>
      <button onClick={() => props.completedTask(props.id)}>☑️</button>
      <button onClick={() => props.deleteTask(props.id)}>🗑️</button>
    </div>
  )
}

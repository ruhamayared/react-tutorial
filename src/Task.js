export default function Task(props) {
  return (
    <div>
      <h1>{props.taskName}</h1>
      <button onClick={() => props.deleteTask(props.id)}>🗑️</button>
    </div>
  )
}
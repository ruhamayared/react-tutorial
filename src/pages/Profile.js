import ChangeProfile from "../components/ChangeProfile"

export default function Profile(props) {
  return (
    <div>
      User is: {props.username}
      <ChangeProfile setUsername={props.setUsername} />
    </div>
  )
}

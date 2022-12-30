import ChangeProfile from "../components/ChangeProfile"
import { useContext } from "react"
import { AppContext } from "../App"

export default function Profile() {
  const { username, setUsername } = useContext(AppContext)
  return (
    <div>
      User is: {username}
      <ChangeProfile setUsername={setUsername} />
    </div>
  )
}

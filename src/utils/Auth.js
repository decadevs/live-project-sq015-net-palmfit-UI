import { useContext } from "react"
import { useLocation, Navigate } from "react-router-dom"
import { UserContextConsumer } from "../context/UserContext"

function Auth({children}) {
    const location = useLocation()
    const { userState } = useContext(UserContextConsumer)

  return userState.userInfo.isLoggedIn ? (
      <div>
        {children}
    </div>
  ) : (<Navigate to="/login" state={{from: location}} />)
}

export default Auth
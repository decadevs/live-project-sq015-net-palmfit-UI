import { createContext, useReducer } from "react";



const UserContext = createContext("")

let InitUser = {
    role: "",
    jwt: ""
}


function reducer(state, action) {
    switch (action.type) {
        case "role":
            return { ...state, role: action.payload }
        case "jwt_token":
            return { ...state, jwt:  action.payload }
    }
}

function UserContextProvider({ children }) {
    
    const [state, dispatch] = useReducer(reducer, InitUser)
    
  return (
      <UserContext.Provider value={{userState: state, userDispatch : dispatch}}>
          {children}
    </UserContext.Provider>
  )
}

export {UserContextProvider, UserContext as UserContextConsumer} 


 import { createContext, useEffect, useReducer } from "react";
 import jwtDecode from "jwt-decode"




const UserContext = createContext("")

let InitUser = {
    userInfo: JSON.parse(localStorage.getItem("user")) || {
        userId: null,
        token:null,
        isLoggedIn: false
    },
    jwt: null
}


function reducer(state, action) {
    switch (action.type) {
        case "jwt":
            return {...state, jwt: action.payload}
        case "storage":
            return {...state, userInfo: action.payload}
    }
}


function UserContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, InitUser)

    useEffect(() =>{
        if(state.jwt != null){
            dispatch({type: "storage", payload: { 
                userId: state.jwt.userId,
                token: state.jwt.jwt,
                isLoggedIn: true
             }})
            localStorage.setItem("user", JSON.stringify( { 
                userId: state.jwt.userId,
                token: state.jwt.jwt,
                isLoggedIn: true
             }))
        }
    }, [state.jwt])
    
  return (
      <UserContext.Provider value={{userState: state, userDispatch : dispatch}}>
          {children}
    </UserContext.Provider>
  )
}

export {UserContextProvider, UserContext as UserContextConsumer} 


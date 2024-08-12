import {useState,createContext} from 'react'
export const Context = createContext()

const AuthContext = ({children}) => {
  
    const [isLoggedIn,setIsLoggedIn] = useState(false)

  return (
  <Context.Provider value={{isLoggedIn,setIsLoggedIn}}>
    {children}
  </Context.Provider>
  )
}

export default AuthContext
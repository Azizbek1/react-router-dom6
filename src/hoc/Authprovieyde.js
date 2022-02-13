import {createContext, useState} from 'react';


export const AuthContext = createContext(null)

export const  AuthProviyder = ({children}) => {
    const [user, setUser] = useState(null)
    const signin = (newUser, cb) => {
        setUser(newUser)
        cb()
    }
    const sigout = (cb) => {
        setUser(null)
        cb()
    }
    const value = {user, signin, sigout}

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

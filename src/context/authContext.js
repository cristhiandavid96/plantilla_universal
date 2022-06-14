import { createContext, useContext } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase'

export const context = createContext();

export const useAuth = () => {

    const contexAuth = useContext(context)

    if (!contexAuth) {
        throw new Error('useAuth debe usarse dentro de un AuthProvider')
    }

    return contexAuth;
}

export function AuthProvider({ children }) {

    const singUp = (email, password) => createUserWithEmailAndPassword(auth,email, password)
    

    return <context.Provider value={{ singUp }}>{children}</context.Provider>
}
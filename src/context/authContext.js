import { createContext, useContext,useEffect,useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
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

    const [user, setUser] = useState(null);

    const singUp = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const logout = () => signOut(auth)

    useEffect(() => {
        onAuthStateChanged(auth, setUser)
    }, []);

    return <context.Provider value={{ singUp, login, user, logout }}>{children}</context.Provider>
}
import { createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
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

    const [loading, setLoading] = useState(true);

    const singUp = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const logout = () => signOut(auth)

    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {

        const unsubcribed = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })

        return () => unsubcribed()

    }, []);

    return <context.Provider value={{ singUp, login, user, logout, loading, loginWithGoogle }}>{children}</context.Provider>
}
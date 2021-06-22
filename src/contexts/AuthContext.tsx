
import * as Imports from '../imports'
import { ReactNode } from 'react'

type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  user: User | undefined;
  signWithGoogle: () => Promise<void>
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = Imports.createContext({} as AuthContextType)




export const AuthContextProvider = (props: AuthContextProviderProps) => {

  const [user, setUser] = Imports.useState<User>()

  const signWithGoogle = async () => {
    const provider = new Imports.firebase.auth.GoogleAuthProvider()
    const result = await Imports.auth.signInWithPopup(provider)

    if (result.user) {
      const { displayName, photoURL, uid } = result.user
      if (!displayName || !photoURL) {
        throw new Error('Missing information fron Google Account')
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }
  return (
    <AuthContext.Provider value={{ user, signWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  )
}



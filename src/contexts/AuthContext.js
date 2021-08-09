import React, { createContext } from "react"
import Loading from "app/components/Loading"
import { auth } from "services/firebase"

export const AuthContext = createContext({})

export const AuthContextProvider = (props) => {
  const [user, setUser] = React.useState()
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid, email } = user
        setUser({ id: uid, name: displayName, avatar: photoURL, email: email })
      }
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const signInWithEmail = async (email, password) => {
    try {
      const result = await auth.signInWithEmailAndPassword(email, password)
      if (result.user) {
        const { displayName, photoURL, uid, email } = result.user
        setUser({ id: uid, name: displayName, avatar: photoURL, email: email })
      }
    } catch (err) {
      return err.message
    }
  }

  const createUserWithEmail = async (email, password) => {
    const result = await auth.createUserWithEmailAndPassword(email, password)

    if (result.user) {
      const { displayName, photoURL, uid, email } = result.user
      setUser({ id: uid, name: displayName, avatar: photoURL, email: email })
    } else {
      setUser({ error: result.error })
    }
  }

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <AuthContext.Provider
      value={{
        loading,
        signed: !!user,
        user,
        signInWithEmail,
        createUserWithEmail,
        logout,
      }}
    >
      {loading ? <Loading /> : props.children}
    </AuthContext.Provider>
  )
}

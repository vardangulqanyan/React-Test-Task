import React, { useContext, createContext } from 'react'
import { firestore } from '../firebase'

const FirestoreContext = createContext()

export const useFirestore = () => {
  return useContext(FirestoreContext)
}

export const FirestoreProvider = ({ children }) => {
  const create = (data, uid) => {
    return firestore.collection(uid).add(data)
  }

  const get = (uid) => {
    return firestore.collection(uid).orderBy('createdAt', 'desc').get()
  }

  const remove = (uid, docId) => {
    return firestore.collection(uid).doc(docId).delete()
  }

  const value = {
    create,
    get,
    remove,
  }

  return (
    <FirestoreContext.Provider value={value}>
      {children}
    </FirestoreContext.Provider>
  )
}

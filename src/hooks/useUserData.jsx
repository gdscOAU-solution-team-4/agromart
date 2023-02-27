import React, { useState, useEffect } from 'react'
import { get, clear } from '../utils/storage';
import { db, doc, getDoc, signOut, auth } from "../firebase/firebase.config"


const useUserData = () => {
    const[user, setUser] = useState('')

    useEffect(() => {

        const fetchItems = async () => {

            const useId = get();

            const docRef = doc(db, "users", useId);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
              setUser(docSnap.data());
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
        }

        fetchItems();
    }, []);

    return user
}
 
export default useUserData;
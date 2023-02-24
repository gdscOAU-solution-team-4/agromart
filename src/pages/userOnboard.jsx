import React, { useState, useEffect } from 'react'
import DefaultLayout from "../layout/defaultLayout"
import { get } from '../utils/storage';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config"

export default function UserOnboard() {

    const[user, setUser] = useState('')

    useEffect(() => {
        const fetchItems = async () => {
            const userId = get();
            let useId = userId;

            const docRef = doc(db, "Users", useId);
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
  return (
    <DefaultLayout>
        welcome {user.surname}
    </DefaultLayout>
  )
}

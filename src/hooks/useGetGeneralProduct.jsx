import { useState, useEffect } from 'react'
import { get } from '../utils/storage';
import { db, doc, getDoc } from "../firebase/firebase.config"


export default function useGetGeneralProduct() {
    const[generalProduct, setGeneralProduct] = useState([])

    useEffect(() => {

        const fetchItems = async () => {

            const productRef = doc(db, "generalProducts", "product")
            const docSnap = await getDoc(productRef);
            
            if (docSnap.exists()) {
              setGeneralProduct(docSnap.data());
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
        }

        fetchItems();
    }, []);

    return generalProduct
}

import React, { useState, useEffect } from 'react'
import DefaultLayout from "../layout/defaultLayout"
import { get, clear } from '../utils/storage';
import { db, doc, getDoc, signOut, auth } from "../firebase/firebase.config"
import { Link } from 'react-router-dom'
import { buyerIcon, farmerIcon } from '../assets';
import { useNavigate } from 'react-router-dom';

export default function UserOnboard() {

    const[user, setUser] = useState('')
    let navigate = useNavigate();

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

    const handleLogout =() =>{
        signOut(auth).then(() => {
        // Sign-out successful.
            clear()
            navigate("/login")
        }).catch((error) => {
            console.log("an error occured")
        // An error happened.
        });
    }
    
  return (
    <DefaultLayout>
      <div className='mt-10 px-5 lg:px-14'>
        <div className='flex justify-between '>

          <div>
            <div className='text-black font-ubuntu capitalize font-bold text-3xl'>
              welcome {user.surname} 👋🏾
            </div>
            <div className='font-dmSan py-3 text-[#525C60] font-500 text-md'>Let’s get you started,</div>
            
          </div>
          <div >
              <button onClick={handleLogout} className='bg-[#0E563F] w-[6rem] py-3 rounded-xl text-white font-semibold'>Logout</button>
          </div>
        </div>
        <div className="font-dmSan font-semibold text-xl py-14 ">Choose How You Would Like To Continue</div>
        <div className='flex justify-between items-center flex-col gap-5 md:flex-row w-full'>

          <div className='w-full flex justify-start items-center'>
            <Link to="/buyer-dashboard">
              <div className="py-8 px-10 w-full md:h-[8rem] mx-auto bg-white rounded-xl shadow filter drop-shadow-lg space-y-6 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img className="block mx-auto h-20 rounded-full sm:mx-0 sm:shrink-0" src={buyerIcon} alt="Woman's Face"/>
                <div className="text-center space-y-2 sm:text-left">
                  <div className="space-y-0.5">
                    <p className="text-lg text-[#0E563F] font-dmSan font-semibold">
                      buyer
                    </p>
                    <p className="text-[#274C5B] text-sm font-medium">
                      get fresh farm produce at affordable price, <br /> get products delivered in time, <br /> less stress 
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className='w-full flex justify-start items-center'>
            <Link to="/farmer-form">
              <div className="py-8 px-10 w-full md:h-[8rem] mx-auto bg-[#EBF0F4] rounded-xl shadow filter drop-shadow-lg space-y-6 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img className="block mx-auto h-20 rounded-full sm:mx-0 sm:shrink-0" src={farmerIcon} alt="Woman's Face"/>
                <div className="text-center space-y-2 sm:text-left">
                  <div className="space-y-0.5">
                    <p className="text-lg text-[#0E563F] font-dmSan font-semibold">
                      farmer
                    </p>
                    <p className="text-slate-500 font-medium">
                      register your farm, conntect with buyers, <br />
                      get paid redced stress of of advertising
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      
        
    </DefaultLayout>
  )
}

import React, { useState, useEffect } from 'react'
import DefaultLayout from "../layout/defaultLayout"
import { get } from '../utils/storage';
import { db, doc, getDoc } from "../firebase/firebase.config"
import { Link } from 'react-router-dom'
import { buyerIcon, farmerIcon } from '../assets';

export default function UserOnboard() {

    const[user, setUser] = useState('')

    useEffect(() => {

        const fetchItems = async () => {

            const userId = get();
            let useId = userId;

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
  return (
    <DefaultLayout>
      <div className='mt-10 px-5 lg:px-14'>
        <div className='text-black font-ubuntu capitalize font-bold text-3xl'>
          welcome {user.surname} 👋🏾
        </div>
        <div className='font-dmSan py-3 text-[#525C60] font-500 text-md'>Let’s get you started,</div>
        <div className="font-dmSan font-semibold text-xl py-14 ">Choose How You Would Like To Continue</div>
        <div className='flex justify-between items-center flex-col gap-5 md:flex-row w-full'>

          <div className='w-full flex justify-start items-center'>
            <Link to="/buyer-dashboard">
              <div class="py-8 px-10 w-full md:h-[8rem] mx-auto bg-white rounded-xl shadow filter drop-shadow-lg space-y-6 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img class="block mx-auto h-20 rounded-full sm:mx-0 sm:shrink-0" src={buyerIcon} alt="Woman's Face"/>
                <div class="text-center space-y-2 sm:text-left">
                  <div class="space-y-0.5">
                    <p class="text-lg text-[#0E563F] font-dmSan font-semibold">
                      buyer
                    </p>
                    <p class="text-[#274C5B] text-sm font-medium">
                      get fresh farm produce at affordable price, <br /> get products delivered in time, <br /> less stress 
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className='w-full flex justify-start items-center'>
            <Link to="/farmer-form">
              <div class="py-8 px-10 w-full md:h-[8rem] mx-auto bg-[#EBF0F4] rounded-xl shadow filter drop-shadow-lg space-y-6 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img class="block mx-auto h-20 rounded-full sm:mx-0 sm:shrink-0" src={farmerIcon} alt="Woman's Face"/>
                <div class="text-center space-y-2 sm:text-left">
                  <div class="space-y-0.5">
                    <p class="text-lg text-[#0E563F] font-dmSan font-semibold">
                      farmer
                    </p>
                    <p class="text-slate-500 font-medium">
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

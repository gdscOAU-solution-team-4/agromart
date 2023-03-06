import { loginImg } from '../../assets'
import Input from '../../components/atoms/Input'
import AuthLayout from '../../layout/authLayout'
import useUserData from '../../hooks/useUserData'
import useDocumentUpdate from '../../hooks/useDocumentUpdate'
import { useState } from 'react';
//firebase
import { 
  db, 
  doc,
  
  } from "../../firebase/firebase.config"
import { get } from '../../utils/storage';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Toast from '../../components/toast/toast'
import { useNavigate } from "react-router-dom";

export default function FarmerOnBoard() {
  const[farmName, setFarmName] = useState("");
  const[farmAddress, setFarmAddress] = useState("");
  let [isOpen, setIsOpen] = useState(false)
  const [showToast, setShowToast] = useState(false);
  const [messages, setMessages] = useState("" || null);
  const navigate = useNavigate();

    
  let userSurname = useUserData()?.surname
  const [updateDocument, isUpdating, message] = useDocumentUpdate();

  function handleProductClick() {
    setIsOpen(false)
    navigate('/product-form')
  }

  function farmerDashboard() {
    
    setIsOpen(false)
    navigate('/farmer-dashboard');
    
  }

    const validateForm = () => {
      let isValid = true
      if ( farmName == '' || farmAddress == '' ) {
        isValid = false
        setMessages('invalid credential')
        let isUpdating = false
      }

        return isValid
    }


  const handleClick = () => {
    setShowToast(true)
    if (validateForm()) {
      const useId = get();
      const docRef = doc(db, "users", useId);

      const newData = { 
        isFarmer: true, 
        farmname: farmName, 
        farmaddress: farmAddress 
      };
      updateDocument(docRef, newData);
      setIsOpen(true)
    }

  }
    const handleCloseToast = () => {
      setShowToast(false);
    };
  return (
    <AuthLayout
      authImg={loginImg}
      buttonContent={isUpdating ? 'Updating...' : 'continue'}
      disabled={isUpdating}
      heading={
        <span className='flex items-center justify-center gap-1 text-center'>
          Hello <span>{userSurname || "user"} 👋🏾</span>
        </span>
      }
      subHeading={'Kindly fill the form below'}
      handleSubmit={handleClick}

    >
      {showToast && (
        <Toast message={messages} onClose={handleCloseToast} />
      )}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={farmerDashboard}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left flex flex-col justify-center items-center align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-primary capitalize font-semibold leading-6"
                  >
                    Would you like to add products now?
                  </Dialog.Title>
                  <div className="my-2">
                    <p className="text-sm text-gray-500 px-10 text-center">
                      Add products earn from products secure payment. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4 flex gap-5">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white focus:outline-none "
                      onClick={handleProductClick}
                    >
                      Yes Am In
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white focus:outline-none "
                      onClick={farmerDashboard}
                    >
                      Skip For Now
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <form action='' className='px-8 py-5'>
        <Input
          type={'text'}
          placeholder={'Farm Name'}
          label={'Farm Name'}
          defaultValue={farmName}
          onChange={e => setFarmName(e.target.value)}
          
        />

        <Input
          type={'text'}
          placeholder={'Farm Address'}
          label={'Farm Address'}
          defaultValue={farmAddress}
          onChange={e => setFarmAddress(e.target.value)}
          
        />
      </form>
    </AuthLayout>
  )
}

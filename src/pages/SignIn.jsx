import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { loginImg } from '../assets'
import Input from '../components/atoms/Input'
import AuthLayout from '../layout/authLayout'


import { auth, signInWithEmailAndPassword } from "../firebase/firebase.config"
import { save as StorageSave } from '../utils/storage';
import Toast from '../components/toast/toast'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("" || null)

    const validateForm = () => {
      let isValid = true
      if ( email == '' || password == '' ) {
        isValid = false
        setMessage('invalid credential')
        setIsLoading(false)
      }

        return isValid
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        setShowToast(true);
        if (validateForm()) {
            signInWithEmailAndPassword(
                auth,
                email,
                password
            )
            .then(async(userCredential) => {
                setMessage("success")
                const user = userCredential.user;
                StorageSave(user.uid);
                window.location.assign('/onboard')
            })
            .catch((err) => {
               
                if (err?.message == "Firebase: Error (auth/wrong-password).") {
                  setMessage("wrong password/email")
                  setIsLoading(false)
                }
                else{
                  setMessage(err?.message)
                  setIsLoading(false)
                }
            })
        }
    }
    const handleCloseToast = () => {
      setShowToast(false);
    };
  return (
    <>
      <AuthLayout
        buttonContent={isLoading ? 'please wait...' : 'Sign In'}
        disabled={isLoading}
        subHeading={'Pick up where you left'}
        authImg={loginImg}
        handleSubmit={handleSubmit}
        quesion={'Don’t have an account?'}
        questionLinkText={' Create One'}
        questionLink={'/register'}
      >
        <form className='px-14 pt-6'>
          <Input
            type={'email'}
            placeholder={'email address'}
            label={'email'}
            defaultValue={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type={'password'}
            placeholder={'password'}
            label={'password'}
            defaultValue={password}
            onChange={e => setPassword(e.target.value)}
          />
          <div className='flex justify-between items-center py-4'>
            <div className='flex justify-center items-center gap-2'>
              <div>
                <input type="checkbox" value={remember} onChange={e => setRemember(e.target.value)}/>
              </div>
              <div className='font-dmSan text-[#141414] font-400 text-md'>remember me</div>
            </div>
            <div>
              <Link
                className=" hover:decoration-none font-dmSan text-[#F38704] font-500 text-md"
                to="/forgotten-password"
              >
                Forgotten Password?
              </Link>
            </div>
          </div>
        </form>
      {showToast && (
        <Toast message={message} onClose={handleCloseToast} />
      )}
      </AuthLayout>
    </>
  )
}

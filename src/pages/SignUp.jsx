import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import { registerImg } from '../assets'
import Input from '../components/atoms/Input'
import AuthLayout from '../layout/authLayout'

import { save as StorageSave } from '../utils/storage';

//firebase
import {auth, 
  db, 
  createUserWithEmailAndPassword, 
  doc,
  setDoc
} from "../firebase/firebase.config"
  
import Toast from '../components/toast/toast';



export default function SignUp() {

  const [email, setEmail] = useState('')
  const [surName, setSurName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState(undefined)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("" || null)

  const validateForm = () => {
    let isValid = true
    if ( 
        email == '' || 
        password == '' || 
        surName == "" || 
        lastName == "" || 
        phoneNumber == "" ||
        confirmPassword == ""
      ) {

      isValid = false
      setMessage('invalid credential')
      setIsLoading(false)

    }

    return isValid

  }

  const validatePassword = () => {
    let isValid = true
      if (password !== '' && confirmPassword !== '' ){
        if (password !== confirmPassword) {
            isValid = false
            setMessage("password does not match")
            setIsLoading(false)
          }
      }

    return isValid
  }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        setShowToast(true);
        if(validateForm() && validatePassword()) {

            createUserWithEmailAndPassword(auth, email, password)
            .then(async(userCredential) => {
              setMessage("success")
              const uid = userCredential.user.uid;

              const userDocRef = doc(db, 'users', uid);

              const userData = {
                email: email,
                surname: surName,
                lastname: lastName,
                username: username,
                phonenumber: Number(phoneNumber),
                isFarmer: false
              };

              StorageSave(uid);
              return setDoc(userDocRef, userData);
                
            })
            .then(() => { 
              window.location.assign('/onboard')
            })
            .catch((err) => {
                if (err?.message == "Firebase: Password should be at least 6 characters (auth/weak-password).") {
                    setMessage("your password is too short please retry")
                    setIsLoading(false)
                } 
                else if(err?.message == "Firebase: Error (auth/email-already-in-use)."){
                    setMessage("This email is been used by someone else")
                    setIsLoading(false)
                }
                else if(err?.message == "Firebase: Error (auth/network-request-failed)."){
                    setMessage("please turn on the internet connection")
                    setIsLoading(false)
                }
                else {
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
        authImg={registerImg}
        quesion={'Already have an account?'}
        questionLinkText={'Sign In'}
        questionLink={'/login'}
        handleSubmit={handleSubmit}
        buttonContent={isLoading ? 'please wait...' : 'get started'}
        disabled={isLoading}
      >
        <form className='md:px-14 px-8 pt-6' onSubmit={handleSubmit}>
          <Input
            type={'email'}
            placeholder={'email address'}
            label={'email'}
            defaultValue={email}
            onChange={e => setEmail(e.target.value)}
          />

          <Input
            type={'text'}
            placeholder={'Surname'}
            label={'surname'}
            defaultValue={surName}
            onChange={e => setSurName(e.target.value)}
          />

          <Input
            type={'text'}
            placeholder={'Last Name'}
            label={'lastName'}
            defaultValue={lastName}
            onChange={e => setLastName(e.target.value)}
          />

          <Input
            type={'tel'}
            placeholder={'Phone Number'}
            label={'phone'}
            defaultValue={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
          <Input
            type={'text'}
            placeholder={'Username'}
            label={'username'}
            defaultValue={username}
            onChange={e => setUsername(e.target.value)}
          />
          <Input
            type={'password'}
            placeholder={'password'}
            label={'password'}
            defaultValue={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Input
            type={'password'}
            placeholder={'conirm Password'}
            label={'ConfirmPassword'}
            defaultValue={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </form>
        {showToast && (
          <Toast message={message} onClose={handleCloseToast} />
        )}
      </AuthLayout>
    </>
  )
}

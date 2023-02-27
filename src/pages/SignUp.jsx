import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import { registerImg } from '../assets'
import Input from '../components/atoms/Input'
import AuthLayout from '../layout/authLayout'

import { save as StorageSave } from '../utils/storage';

//firebase
import {auth, 
  db, 
  provider, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  collection, 
  addDoc, 
  doc,
  setDoc
  } from "../firebase/firebase.config"
  



export default function SignUp() {

  const [email, setEmail] = useState('')
  const [surName, setSurName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState(undefined)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  const validatePassword = () => {
    let isValid = true
      if (password !== '' && confirmPassword !== '' ){
        if (password !== confirmPassword) {
            isValid = false
            alert("password does not match")
          }
      }

    return isValid
  }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(validatePassword()) {
          // Create a new user with email and password using firebase
            createUserWithEmailAndPassword(auth, email, password)
            .then(async(userCredential) => {
              alert("ses")
              const uid = userCredential.user.uid;

              const userDocRef = doc(db, 'users', uid);

              const userData = {
                email: email,
                surname: surName,
                lastname: lastName,
                username: username,
                phonenumber: Number(phoneNumber)
              };

              StorageSave(uid);
              return setDoc(userDocRef, userData);
                
            })
            .then(() => { 
              window.location.assign('/onboard')
            })
            .catch((err) => {
                if (err.message == "Firebase: Password should be at least 6 characters (auth/weak-password).") {
                    console.log("your password is too short please retry")
                } 
                else if(err.message == "Firebase: Error (auth/email-already-in-use)."){
                    console.log("This email is been used by someone else")
                }
                else if(err.message == "Firebase: Error (auth/network-request-failed)."){
                    console.log("please turn on the internet connection")
                }
                else {
                    console.log(err.message)
                }
            })
        }
      }
  return (
    <>
      <AuthLayout
        authImg={registerImg}
        quesion={'Already have an account?'}
        questionLinkText={'Sign In'}
        questionLink={'/login'}
        handleSubmit={handleSubmit}
      >
        <form className='px-14 pt-6' onSubmit={handleSubmit}>
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
            // consider input type='tel'
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
      </AuthLayout>
    </>
  )
}

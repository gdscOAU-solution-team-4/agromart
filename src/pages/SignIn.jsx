import React, { useState } from 'react'

import { loginImg } from '../assets'
import Input from '../components/atoms/Input'
import AuthLayout from '../layout/authLayout'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <AuthLayout
        buttonContent={'Sign In'}
        subHeading={'Pick up where you left'}
        authImg={loginImg}
        handleLink={'/'}
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
        </form>
      </AuthLayout>
    </>
  )
}

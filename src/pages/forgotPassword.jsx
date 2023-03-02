import React, { useState } from 'react'

import { forgotPassword } from '../assets'
import Input from '../components/atoms/Input'
import AuthLayout from '../layout/authLayout'

export default function ForgotPassword() {

  const [email, setEmail] = useState('')

  return (
    <>
      <AuthLayout
        buttonContent={'Get Reset Link'}
        subHeading={'Reset your account password here'}
        authImg={ forgotPassword }
        handleLink={'/updatePassword'}
        quesion={'Don’t have an account?'}
        questionLinkText={' Create One'}
        questionLink={'/register'}
      >
        <form className='md:px-14 px-8 pt-6'>

          <Input
            type={'email'}
            placeholder={'email address'}
            label={'email'}
            defaultValue={email}
            onChange={e => setEmail(e.target.value)}
          />

        </form>
      </AuthLayout>
    </>
  )
}

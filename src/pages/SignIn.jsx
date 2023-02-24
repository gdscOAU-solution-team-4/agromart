import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { loginImg } from '../assets'
import Input from '../components/atoms/Input'
import AuthLayout from '../layout/authLayout'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)

  return (
    <>
      <AuthLayout
        buttonContent={'Sign In'}
        subHeading={'Pick up where you left'}
        authImg={loginImg}
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
      </AuthLayout>
    </>
  )
}

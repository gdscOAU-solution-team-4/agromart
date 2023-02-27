import { Icon } from '@iconify/react'
import { loginImg } from '../assets'
import Input from '../components/atoms/Input'
import AuthLayout from '../layout/authLayout'
import useUserData from '../hooks/useUserData'
import { useState } from 'react'

export default function FarmerOnBoard() {
  const[farmName, setFarmName] = useState("");
  const[farmAddress, setFarmAddress] = useState("");

  let userSurname = useUserData()?.surname

  return (
    <AuthLayout
      authImg={loginImg}
      buttonContent={'Continue'}
      heading={
        <span className='flex items-center justify-center gap-1 text-center'>
          Hello <span>{userSurname || "user"} 👋🏾</span>
        </span>
      }
      subHeading={'Kindly fill the form below'}
    >
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

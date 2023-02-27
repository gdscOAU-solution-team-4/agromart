import { Icon } from '@iconify/react'
import { loginImg } from '../assets'
import Input from '../components/atoms/Input'
import AuthLayout from '../layout/authLayout'

export default function FarmerOnBoard() {
  return (
    <AuthLayout
      authImg={loginImg}
      buttonContent={'Continue'}
      heading={
        <span className='flex items-center justify-center gap-1 text-center'>
          Hello User{' '}
          <span>
            <Icon icon='noto:waving-hand-medium-dark-skin-tone' />
          </span>
        </span>
      }
      subHeading={'Kindly fill the form below'}
    >
      <form action='' className='px-8 py-5'>
        <Input
          type={'text'}
          placeholder={'Farm Name'}
          label={'Farm Name'}
          defaultValue={''}
        />

        <Input
          type={'text'}
          placeholder={'Farm Address'}
          label={'Farm Address'}
          defaultValue={''}
        />
      </form>
    </AuthLayout>
  )
}

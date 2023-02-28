import React from 'react'

export default function ProductForm() {
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
      handleSubmit={handleClick}
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

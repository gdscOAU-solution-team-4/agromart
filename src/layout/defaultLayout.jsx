import React from 'react'

import Navbar from '../components/common/Navbar'

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />

      <div className='bg-[F9F8F8]'>{children}</div>
    </>
  )
}

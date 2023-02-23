import React from 'react'

import Navbar from '../components/common/Navbar'

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />

      <div className=''>{children}</div>
    </>
  )
}

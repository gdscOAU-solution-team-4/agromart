import React from 'react'

import About from '../components/home/About'
import Hero from '../components/home/Hero'
import Offer from '../components/home/Offer'
import Products from '../components/home/Products'
import DefaultLayout from '../layout/defaultLayout'

export default function Home() {
  return (
    <DefaultLayout>
      <main className='bg-[#F9F8F8]'>
        <Hero />
        <Offer />
        <About />
        <Products />
      </main>
    </DefaultLayout>
  )
}

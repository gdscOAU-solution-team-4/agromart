import React from 'react'

import About from '../components/home/About'
import Cta from '../components/home/Cta'
import Hero from '../components/home/Hero'
import Offer from '../components/home/Offer'
import OfferWProducts from '../components/home/OfferWProducts'
import Products from '../components/home/Products'
import ProductItem from '../components/shop/ProductItem'
import ProductsList from '../components/shop/ProductsList'
import DefaultLayout from '../layout/defaultLayout'

export default function Home() {
  return (
    <DefaultLayout>
      <main className='bg-[#F9F8F8]'>
        <Hero />
        <Offer />
        <About />
        <ProductsList />
        <OfferWProducts />
        <Cta />
      </main>
    </DefaultLayout>
  )
}

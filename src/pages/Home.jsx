import React from 'react'
import About from '../components/home/About'
import Hero from '../components/home/Hero'
import Offer from '../components/home/Offer'
import DefaultLayout from '../layout/defaultLayout'

export default function Home() {
  return (
    <DefaultLayout>
      <main>

        <section>
          <Hero />
        </section>

        <section>
          <Offer/>
        </section>

        <section>
          <About />
        </section>

      </main>
        
    </DefaultLayout>
  )
}

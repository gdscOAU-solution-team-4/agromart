import React from 'react'
import Aboutus from '../components/about us/AboutUs'
// some imports are empty that's why you got empty page (check console for errors)
// import Footer from '../components/about us/Footer'
import OurTeam from '../components/about us/OurTeam'
// import WhatWeOffer from '../components/about us/WhatWeOffer'
import WhyChooseUs from '../components/about us/WhyChooseUs'
import DefaultLayout from '../layout/defaultLayout'
import Hero from '../components/about us/Hero'


export default function AboutUs() {
  // happy coding, always check console for errors when you get blank screen
  return (
    <DefaultLayout>
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <Aboutus />
        </section>
        <section>
          <WhyChooseUs />
        </section>
        <section>
           <OurTeam /> 
        </section>
        <section>
          {/* <WhatWeOffer /> */}
        </section>
        <section>
          {/* <Footer /> */}
        </section>
      </main>
    </DefaultLayout>
  )
}
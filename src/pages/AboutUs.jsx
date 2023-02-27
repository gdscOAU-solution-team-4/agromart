import React from 'react'
import DefaultLayout from '../layout/defaultLayout'
import Aboutus from '../components/about us/AboutUs'
import WhyChooseUs from '../components/about us/WhyChooseUs'
import OurTeam from '../components/about us/OurTeam'
import WhatWeOffer from '../components/about us/WhatWeOffer'
import Footer from '../components/about us/Footer'


export default function AboutUs() {
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
            <WhatWeOffer />
          </section>
          <section>
            <Footer />
          </section>
        </main>
      </DefaultLayout>
    )
  }
  
import Header from '../components/shop/Header'
import Products from '../components/shop/Products'
import SectionFragment from '../components/interface/SectionFragment'
import DefaultLayout from '../layout/defaultLayout'

export default function BuyerDash() {
  return (
    <DefaultLayout>
      <div className='min-h-screen bg-white-100 py-9'>
        <SectionFragment className='my-7'>
          <Header />
          <Products />
        </SectionFragment>
      </div>
    </DefaultLayout>
  )
}

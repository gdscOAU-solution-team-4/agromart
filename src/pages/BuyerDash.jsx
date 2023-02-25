import Header from '../components/shop/Header'
import Products from '../components/shop/Products'
import SectionFragment from '../components/UI/SectionFragment'
import DefaultLayout from '../layout/defaultLayout'

export default function BuyerDash() {
  return (
    <DefaultLayout>
      <div className='bg-white-100 py-9 min-h-screen'>
        <SectionFragment className='my-7'>
          <Header />
          <Products />
        </SectionFragment>
      </div>
    </DefaultLayout>
  )
}

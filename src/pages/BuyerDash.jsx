import Header from '../components/shop/Header'
import Products from '../components/shop/Products'
import DefaultLayout from '../layout/defaultLayout'

export default function BuyerDash() {
  return (
    <DefaultLayout>
      <div className='min-h-screen bg-white-100 py-9 px-1 md:px-0 lg:px-5'>
        {/* <SectionFragment className='my-7'> */}
        <div className='px-7 md:px-4 lg:px-20'>
          <Header />
          <Products />
        </div>
        {/* </SectionFragment> */}
      </div>
    </DefaultLayout>
  )
}

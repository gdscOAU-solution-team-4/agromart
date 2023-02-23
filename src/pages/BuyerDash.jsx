import Card from '../components/UI/Card'
import SectionFragment from '../components/UI/SectionFragment'
import DefaultLayout from '../layout/defaultLayout'

export default function BuyerDash() {
  return (
    <DefaultLayout>
      <div className='bg-white-100 py-9'>
        <SectionFragment className='my-7'>
          <h1>Welcome user {/* insert emoji: waving */}</h1>
          <p>Find Your Favourite Farm Product at affordable prices</p>

          <div>
            <Card>
              {/* search icon here */}
              <input type='search' name='' id='' />
            </Card>
          </div>
        </SectionFragment>
      </div>
    </DefaultLayout>
  )
}

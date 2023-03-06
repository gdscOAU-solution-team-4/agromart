import { Link } from 'react-router-dom'
import Button from '../atoms/Button'

export default function Cta() {
  return (
    <section className='my-28 px-5'>
      <div className='flex flex-col items-center rounded-[2.5rem] bg-[#0E563F] px-7 py-8 md:px-4 lg:items-start lg:px-20'>
        <h3 className='text-center font-roboto text-lg sm:text-2xl font-semibold leading-none text-white md:text-start md:text-[1.5rem]'>
          Get Affordable Agricultural Products Easily
        </h3>
        <p className='my-7 mx-auto md:max-w-[70%] max-w-[90%] text-center font-dmSan text-sm text-white md:mx-0 md:text-start md:text-xl'>
          Our affordable range of plans are designed to fit the unexpected
          healthcare cost of your family & employees and bring everyone peace of
          mind. Express your care by subscribing to our quality health plans.
        </p>
        <Link
          to='/register'
          className='inline-block'
        >
          <Button className='rounded-[6.25rem] bg-white font-dmSan text-sm font-medium text-[#0E563F] hover:!border-white hover:!text-white md:text-base'>
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import { mainImg } from '../../assets'
import Button from '../atoms/Button'

export default function Hero() {
  return (
    <section className=' min-h-full bg-[#F1EFF0] px-1 md:px-0 lg:px-5'>
      <div className='h-screen px-2 md:px-4 lg:px-20'>
        <div className='flex h-full items-center justify-center flex-col md:flex-col-reverse md:justify-between lg:flex-row'>
          <div className='my-8 basis-5/12 text-center lg:text-start'>
            <div className='flex flex-col-reverse pt-8 md:pt-40 lg:pt-0'>
            <h2 className='lg:text-6xl lg:w-[100%] md:text-5xl text-center md:text-left py-3 text-3xl lg:leading-[70px] font-roboto text-slate-900 font-bold'>
              Choose the best
              healthier way
              of life
            </h2>
              <h2 className='font-yellowtail text-lg text-[#68A47F] md:text-2xl'>
                100% Natural Agricultural product
              </h2>
            </div>
            <Link
              to='/register'
              className='inline-block border-[.625rem] border-transparent'
            >
              <Button className='rounded-xl bg-primary w-40 lg:w-32 py-3 font-roboto text-sm font-bold text-white md:text-xl'>
                Get Started
              </Button>
            </Link>
          </div>

          {/* hero image */}
          <div className='grid h-full basis-1/2 place-items-center md:block'>
            <img
              src={mainImg}
              alt='hero image with plates'
              className='h-full w-full'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

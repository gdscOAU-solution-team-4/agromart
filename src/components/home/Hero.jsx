import { Link } from 'react-router-dom'
import { mainImg } from '../../assets'
import Button from '../atoms/Button'

export default function Hero() {
  return (
    <section className=' min-h-[50rem] bg-[#F1EFF0] px-1 md:px-0 lg:px-5'>
      <div className='h-[50rem] px-7 md:px-4 lg:px-20'>
        <div className='flex h-full items-center justify-center md:flex-col-reverse md:justify-between lg:flex-row'>
          <div className='my-8 basis-5/12 text-center lg:text-start'>
            <div className='flex flex-col-reverse'>
              <h1 className='my-4 font-roboto text-5xl font-extrabold leading-none text-[#153A49] md:text-[3.125rem]'>
                Healthy Harvests <br /> for a Healthy Lifestyle
              </h1>
              <h2 className='font-yellowtail text-2xl text-[#68A47F] md:text-4xl'>
                100% Natural Agricultural product
              </h2>
            </div>
            <Link
              to='/register'
              className='inline-block border-[.625rem] border-transparent'
            >
              <Button className='rounded-2xl bg-primary py-6 px-5 font-roboto text-sm font-bold text-white md:text-xl'>
                Get Started
              </Button>
            </Link>
          </div>

          {/* hero image */}
          <div className='grid hidden h-full basis-1/2 place-items-center md:block'>
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

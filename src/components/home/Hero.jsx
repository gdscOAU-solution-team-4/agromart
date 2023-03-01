import { Link } from 'react-router-dom'
import { mainImg } from '../../assets'
import Button from '../atoms/Button'

export default function Hero() {
  return (
    <section className='h-[50rem] bg-[#F1EFF0] px-1 md:px-0 lg:px-5'>
      <div className='h-full px-7 md:px-4 lg:px-20'>
        <div className='flex h-full flex-col-reverse items-center justify-between md:flex-row'>
          <div className='my-8 basis-5/12 text-center md:text-start'>
            <div className='flex flex-col-reverse'>
              <h1 className='my-4 font-roboto text-5xl font-extrabold text-[#153A49] md:text-[4.375rem]'>
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
              <Button className='rounded-2xl bg-primary py-7 px-10 font-roboto text-sm font-bold text-white md:text-xl'>
                Get Started
              </Button>
            </Link>
          </div>

          {/* hero image */}
          <div className='grid h-full basis-1/2 place-items-center'>
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

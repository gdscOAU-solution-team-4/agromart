import { Link } from 'react-router-dom'
import { mainImg } from '../../assets'
import Button from '../atoms/Button'

export default function Hero() {
  return (
    <div className=' min-h-[43.75rem] bg-[#F1EFF0] px-1 md:px-0 lg:px-5'>
      <div className='flex min-h-[43.75rem] items-center px-7 md:px-4 lg:px-20'>
        <div className='bg-black'>
          <div className='flex flex-col-reverse'>
            <h1 className='font-roboto text-[2rem] font-extrabold leading-none text-[#153A49] md:text-[4rem]'>
              Healthy Harvests for a Healthy Lifestyle
            </h1>
            <h2 className='font-yellowtail text-2xl text-[#68A47F] md:text-[1.875rem]'>
              100% Natural Agricultural product
            </h2>
          </div>
          <Link
            to='/register'
            className='inline-block border-[.625rem] border-transparent'
          >
            <Button className='rounded-2xl bg-[#0E563F] px-6 py-5 text-white'>
              Get Started
            </Button>
          </Link>
        </div>
        <div className=''>
          <img src={mainImg} alt='delicacy on plates' aria-hidden />
        </div>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'

import { mainImg } from '../../assets'

export default function Hero() {

  return (
    <div className='w-full h-auto mb-5 flex flex-col md:flex-row items-center pt-14 md:pt-20 bg-[#F1EFF0] '>
      <div className='w-full lg:w-1/2 flex flex-col px-14 lg:pl-20'>
        <h5 className='font-yellowtail text-xl text-[#68A47F]'>
          100% Natural Food
        </h5>
        <h2 className='lg:text-6xl lg:w-[90%] md:text-5xl text-center md:text-left py-3 text-3xl lg:leading-[70px] font-roboto text-slate-900 font-bold'>
          Choose the best
          healthier way
          of life
        </h2>
        <div className='pt-5 flex justify-center items-center md:justify-start md:items-start'>
          <Link to='/register'>
            <button className='bg-[#0E563F] w-40 lg:w-32 py-3 rounded-xl text-white font-semibold'>
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className='lg:w-1/2 h-max w-full pt-10 md:pt-0 flex justify-end items-end'>
        <img  src={mainImg} alt='main image' className='w-[90%] ' />
      </div>
    </div>
  )
}

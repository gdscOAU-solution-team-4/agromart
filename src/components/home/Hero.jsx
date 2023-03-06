import { Link } from 'react-router-dom'
import { mainImg, backgroundPattern } from '../../assets'
import Button from '../atoms/Button'

export default function Hero() {
  return (
    <section className='max-h-auto md:max-h-screen bg-[#F1EFF0] px-1 md:px-0 lg:px-5'>
      
      <div className='h-full px-2 lg:px-4 xl:px-20'>
        
        <div className='flex h-full items-center justify-between flex-col md:flex-row'>
          <div className='absolute top-20 left-0'>
          <img src={backgroundPattern} alt="" />
        </div>
          <div className=' w-full md:mr-10 lg:px-0 my-8 z-[1] basis-5/12 text-center flex flex-col justify-center lg:justify-start lg:items-start lg:text-start'>
            <div className='flex flex-col '>

              <h2 className=' pt-8 font-yellowtail text-lg text-[#68A47F] md:text-2xl'>
                100% Natural Agricultural product
              </h2>
              <h2 className='xl:text-6xl md:text-4xl lg:text-5xl  lg:w-[100%] text-center md:text-left py-1 text-3xl md:leading-[50px] xl:leading-[70px] lg:leading-[60px] font-roboto text-slate-900 font-bold'>
                Choose the best
                healthier way
                of life
              </h2>
              
            </div>
            <div className='flex flex-col md:justify-start md:items-start'>
              <Link
              to='/register'
              className=''
            >
              <Button className='rounded-xl bg-primary w-40 lg:w-32 py-3 font-roboto text-sm font-bold text-white md:text-xl'>
                Get Started
              </Button>
            </Link>
            </div>
            
          </div>

          {/* hero image */}
          <div className='grid sm:w-[60%] w-full h-auto md:h-[85vh] place-items-center md:block'>
            <img
              src={mainImg}
              alt='hero image with plates'
              className='h-full w-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

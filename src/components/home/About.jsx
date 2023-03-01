import { fruits } from '../../assets'

export default function About() {
  return (
    <div className='w-full bg-white-100 px-1 py-6 md:px-0 lg:px-5'>
      <div className='px-7 md:px-4 lg:px-20'>
        <div className='flex flex-col md:flex-row'>
          <div className=''>
            <img src={fruits} alt='fruits' className='' />
          </div>
          <div className='text-center md:text-start'>
            <div>
              <h2 className='font-yellowtail text-xl text-[#7EB693] md:text-4xl'>
                About Us
              </h2>
              <h3 className='my-3 font-roboto text-2xl font-extrabold leading-none text-[#274C5B] md:text-[3.125rem]'>
                We Believe in Working <br /> Accredited Farmers
              </h3>
              <p className='mx-auto max-w-[70%] font-openSan text-sm text-[#525C60] md:mx-0 md:text-lg'>
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

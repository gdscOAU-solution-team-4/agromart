import { offerImg1, offerImg2 } from '../../assets'

export default function Offer() {
  return (
    <div className=' flex flex-col gap-5 py-14 md:flex-row' aria-hidden>
      <div className='flex w-full items-center justify-center md:w-1/2'>
        <img src={offerImg1} alt='' className='w-[75%]' />
      </div>
      <div className='flex w-full  items-center justify-center md:w-1/2'>
        <img src={offerImg2} alt='offers' className='w-[75%]' aria-hidden />
      </div>
    </div>
  )
}

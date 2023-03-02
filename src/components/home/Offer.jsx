import { offerImg1, offerImg2 } from '../../assets'

export default function Offer() {
  return (
    <div className=' py-14 flex flex-col md:flex-row gap-5'>
      <div className='md:w-1/2 w-full  flex justify-center items-center'>
        <img src={offerImg1} alt='' className='w-[75%]' />
      </div>
      <div className='md:w-1/2 w-full  flex justify-center items-center'>
        <img src={offerImg2} alt='' className='w-[75%]' />
      </div>
    </div>
  )
}

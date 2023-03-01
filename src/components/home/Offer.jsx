import { offerImg1, offerImg2 } from '../../assets'

export default function Offer() {
  return (
    <div className='flex bg-white-100 py-14'>
      <div className='flex w-1/2 items-center justify-center'>
        <img
          src={offerImg1}
          alt='get garden fruit poster'
          className='w-[75%]'
        />
      </div>
      <div className='flex w-1/2 items-center justify-center'>
        <img
          src={offerImg2}
          alt='Get 10% off on vegetables'
          className='w-[75%]'
        />
      </div>
    </div>
  )
}

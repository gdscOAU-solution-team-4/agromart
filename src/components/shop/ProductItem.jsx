import Card from '../interface/Card'

export default function ProductItem({
  category,
  name,
  price,
  deal,
  rating,
  imgUrl,
}) {
  return (
    <Card className='flex cursor-pointer flex-col justify-between rounded-2xl bg-white drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)] transition-transform ease-in hover:translate-y-2'>
      <h5 className='max-w-max rounded-lg bg-[#274c5b] p-2 text-center font-openSan text-sm font-semibold text-white md:text-base'>
        {category}
      </h5>
      <div className='grid w-full place-items-center'>
        <img src={imgUrl} alt={name} />
      </div>
      <div>
        <p className='font-roboto text-base font-semibold text-[#274c5b] md:text-xl'>
          {name}
        </p>
        <hr className='my-3' />
        <div className='flex justify-between'>
          <div className='flex gap-2 font-openSan font-semibold'>
            <p className='text-[#B8B8B8] line-through'>${price}</p>
            <p className='text-[#274c5b]'>${deal}</p>
          </div>
          <p>{rating}</p>
        </div>
      </div>
    </Card>
  )
}

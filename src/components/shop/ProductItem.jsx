import Card from '../UI/Card'

export default function ProductItem({
  category,
  name,
  price,
  deal,
  rating,
  imgUrl,
}) {
  return (
    <Card className='bg-white drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)] rounded-2xl cursor-pointer hover:translate-y-2 ease-in transition-transform'>
      <h5 className='p-2 bg-[#274c5b] rounded-lg text-center text-white font-openSan max-w-max md:text-base text-sm font-semibold'>
        {category}
      </h5>
      <div>
        <img src={imgUrl} alt={name} />
      </div>
      <div>
        <p className='font-roboto font-semibold text-[#274c5b] md:text-xl text-base'>
          {name}
        </p>
        <hr />
        <div className='flex justify-between'>
          <div className='font-openSan font-semibold flex gap-2'>
            <p className='text-[#B8B8B8] line-through'>${price}</p>
            <p className='text-[#274c5b]'>${deal}</p>
          </div>
          <p>{rating}</p>
        </div>
      </div>
    </Card>
  )
}

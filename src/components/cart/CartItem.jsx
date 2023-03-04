import { TrashIcon } from '@heroicons/react/24/outline'
import useCart from '../../context/cartCtx/cart-ctx'
import Card from '../interface/Card'

export default function CartItem({ item }) {
  //? get dispatch from cart context
  const { dispatch } = useCart()
  //? get item properties
  const { imgUrl, name, category, unitPrice } = item

  return (
    <Card className='my-7 flex items-center justify-between gap-10 bg-white shadow-[12px_26px_50px_rgba(90,108,234,0.07)]'>
      <div className='flex items-center  gap-5'>
        <div className='hidden aspect-square max-w-[8.875rem] rounded-2xl md:block'>
          <img
            src={imgUrl}
            alt={name}
            className='h-full w-full rounded-[inherit]'
          />
        </div>
        <div className='p-3 font-workSans'>
          <p className='text-sm font-bold leading-[2.8662rem] text-black md:text-[2.1875rem]'>
            {name}
          </p>
          <span className='my-3 text-xs font-medium leading-[2.375rem] text-[#bbbbbb] md:text-[1.8125rem]'>
            {category}
          </span>
          <p className='bg-[linear-gradient(98.81deg,#0E563F_-0.82%,#15BE77_101.53%)] bg-clip-text text-base font-extrabold text-transparent md:text-[2.1875rem] md:leading-[131.02%]'>
            $ {unitPrice}
          </p>
        </div>
      </div>
      <button
        className='group inline-block cursor-pointer rounded-[.625rem] border-[.625rem] border-transparent bg-green-100 p-2 text-center transition-colors duration-200 ease-linear hover:bg-inherit hover:outline hover:outline-green-100'
        onClick={() => {
          dispatch({ type: 'REMOVE_ITEM', item })
        }}
      >
        <TrashIcon className='w-8 text-white group-hover:text-green-100' />
      </button>
    </Card>
  )
}

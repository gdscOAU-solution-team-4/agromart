import { tomatoes } from '../assets'
import CartItem from '../components/cart/CartItem'
import Summary from '../components/cart/Summary'
import DefaultLayout from '../layout/defaultLayout'

const cartItems = [
  {
    imgUrl: tomatoes,
    name: 'Fresh Tomatoes',
    category: 'vegetable',
    price: 500,
  },
  {
    imgUrl: tomatoes,
    name: 'Fresh Tomatoes',
    category: 'vegetable',
    price: 500,
  },
  {
    imgUrl: tomatoes,
    name: 'Fresh Tomatoes',
    category: 'vegetable',
    price: 500,
  },
  {
    imgUrl: tomatoes,
    name: 'Fresh Tomatoes',
    category: 'vegetable',
    price: 500,
  },
]

export default function Cart() {
  return (
    <DefaultLayout>
      <section id='cart' className='min-h-screen px-1 md:px-0 lg:px-5'>
        <div className='my-10 px-7 md:px-4 lg:px-20'>
          <h1 className='font-workSans text-2xl font-bold text-black md:text-[3.25rem] md:leading-[4.2581rem]'>
            Order details
          </h1>
          <div className='flex flex-col flex-wrap justify-center gap-10 md:justify-between lg:flex-row'>
            {/* items */}
            <div className='grow basis-2/5'>
              {cartItems.map((item, index) => (
                <CartItem
                  key={index}
                  name={item.name}
                  category={item.category}
                  price={item.price}
                  imgUrl={item.imgUrl}
                />
              ))}
            </div>

            {/* summary card */}
            <Summary />
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}

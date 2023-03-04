import { tomatoes } from '../assets'
import CartItem from '../components/cart/CartItem'
import Summary from '../components/cart/Summary'
import Card from '../components/interface/Card'
import useCart from '../context/cartCtx/cart-ctx'
import DefaultLayout from '../layout/defaultLayout'

export const STATIC_CART_ITEMS = [
  {
    imgUrl: tomatoes,
    name: 'Fresh Tomatoes 1',
    category: 'vegetable',
    unitPrice: 500,
    discount: 20,
    quantity: 10,
    id: 1,
  },
  {
    imgUrl: tomatoes,
    name: 'Fresh Tomatoes 2',
    category: 'vegetable',
    unitPrice: 500,
    discount: 20,
    quantity: 10,
    id: 2,
  },
  {
    imgUrl: tomatoes,
    name: 'Fresh Tomatoes 3',
    category: 'vegetable',
    unitPrice: 500,
    discount: 20,
    quantity: 10,
    id: 3,
  },
  {
    imgUrl: tomatoes,
    name: 'Fresh Tomatoes 4',
    category: 'vegetable',
    unitPrice: 500,
    discount: 20,
    quantity: 10,
    id: 4,
  },
]

export default function Cart() {
  const {
    state: { items },
  } = useCart()
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
              {items.length > 0 ? (
                items.map((item, index) => <CartItem key={index} item={item} />)
              ) : (
                <Card>
                  <p>Oga mi, sapa don choke ? cuz nothing dey here o!</p>
                </Card>
              )}
            </div>

            {/* summary card */}
            <Summary />
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}

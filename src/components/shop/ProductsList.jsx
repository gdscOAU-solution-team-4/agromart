import Button from '../UI/Button'
import ProductItem from './ProductItem'

const products = [
  {
    category: 'vegteables',
    name: 'Calabrese Broccoli',
    price: 20.0,
    dealPrice: 13.0,
    ratingStar: 5,
    imgUrl: '/brocolli.png',
  },
  {
    category: 'Fresh',
    name: 'Fresh Banana Fruits',
    price: 20.0,
    dealPrice: 14.0,
    ratingStar: 5,
    imgUrl: '/banana.png',
  },
  {
    category: 'Millets',
    name: 'White Nuts',
    price: 20.0,
    dealPrice: 15.0,
    ratingStar: 5,
    imgUrl: '/white_nuts.png',
  },
  {
    category: 'Health',
    name: 'Mung Bean',
    price: 20.0,
    dealPrice: 11.0,
    ratingStar: 5,
    imgUrl: '/mung_bean.png',
  },
  {
    category: 'Nuts',
    name: 'Brown Hazelnut',
    price: 20.0,
    dealPrice: 12.0,
    ratingStar: 5,
    imgUrl: '/hazelnut.png',
  },
  {
    category: 'Fresh',
    name: 'Eggs',
    price: 20.0,
    dealPrice: 17.0,
    ratingStar: 5,
    imgUrl: '/eggs.png',
  },
  {
    category: 'Fruits',
    name: 'Cucumber',
    price: 20.0,
    dealPrice: 11.0,
    ratingStar: 5,
    imgUrl: '/cucumber.png',
  },

  {
    category: 'Fresh',
    name: 'Fresh Corn',
    price: 20.0,
    dealPrice: 17.0,
    ratingStar: 5,
    imgUrl: '/corn.png',
  },
]

export default function ProductsList() {
  return (
    <>
      <div className='my-20 grid grid-cols-1 gap-5 md:grid-cols-3'>
        {products.map(
          ({ category, name, price, dealPrice, ratingStar, imgUrl }) => (
            <ProductItem
              category={category}
              name={name}
              price={price}
              deal={dealPrice}
              rating={ratingStar}
              imgUrl={imgUrl}
            />
          )
        )}
      </div>
      <Button className='mx-auto block bg-green-100 pr-32 pl-32 pt-3 pb-3 font-dmSan text-sm font-medium text-white md:text-base'>
        Next Page
      </Button>
    </>
  )
}

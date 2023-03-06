import { Fragment } from 'react'
import Button from '../atoms/Button'
import ProductItem from './ProductItem'
import useGetGeneralProduct from '../../hooks/useGetGeneralProduct'

export const STATIC_PRODUCTS = [
  {
    id: 1,
    category: 'vegteables',
    name: 'Calabrese Broccoli',
    price: 20.0,
    dealPrice: 13.0,
    ratingStar: 5,
    imgUrl: '/brocolli.png',
  },
  {
    id: 2,
    category: 'Fresh',
    name: 'Fresh Banana Fruits',
    price: 20.0,
    dealPrice: 14.0,
    ratingStar: 5,
    imgUrl: '/banana.png',
  },
  {
    id: 3,
    category: 'Millets',
    name: 'White Nuts',
    price: 20.0,
    dealPrice: 15.0,
    ratingStar: 5,
    imgUrl: '/white_nuts.png',
  },
  {
    id: 4,
    category: 'Health',
    name: 'Mung Bean',
    price: 20.0,
    dealPrice: 11.0,
    ratingStar: 5,
    imgUrl: '/mung_bean.png',
  },
  {
    id: 5,
    category: 'Nuts',
    name: 'Brown Hazelnut',
    price: 20.0,
    dealPrice: 12.0,
    ratingStar: 5,
    imgUrl: '/hazelnut.png',
  },
  {
    id: 6,
    category: 'Fresh',
    name: 'Eggs',
    price: 20.0,
    dealPrice: 17.0,
    ratingStar: 5,
    imgUrl: '/eggs.png',
  },
  {
    id: 7,
    category: 'Fruits',
    name: 'Cucumber',
    price: 20.0,
    dealPrice: 11.0,
    ratingStar: 5,
    imgUrl: '/cucumber.png',
  },

  {
    id: 8,
    category: 'Fresh',
    name: 'Fresh Corn',
    price: 20.0,
    dealPrice: 17.0,
    ratingStar: 5,
    imgUrl: '/corn.png',
  },
]
const Loader = () => {
  return(
    <div>loading...</div>
  )
}
export default function ProductsList() {
  let generalProduct = useGetGeneralProduct()?.products
  console.log(generalProduct)
  return (
    <>
      <div className='my-20 grid grid-cols-1 gap-5 md:grid-cols-3'>
        {generalProduct == undefined ? <Loader /> : generalProduct.map(
          ({ category, name, price, dealPrice, ratingStar, imgUrl }, i) => (
            <Fragment key={i}>
              <ProductItem
                category={category}
                name={name}
                price={price}
                deal={dealPrice}
                rating={ratingStar}
                imgUrl={imgUrl}
              />
            </Fragment>
          )
        )}
      </div>
      <Button className='mx-auto block bg-green-100 font-dmSan text-sm font-medium text-white md:text-base'>
        Next Page
      </Button>
    </>
  )
}

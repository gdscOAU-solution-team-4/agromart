import { Fragment } from 'react'
import Button from '../interface/Button'
import ProductItem from './ProductItem'

const products = [
  {
    id:1,
    category: 'vegteables',
    name: 'Calabrese Broccoli',
    price: 20.0,
    dealPrice: 13.0,
    ratingStar: 5,
    imgUrl: '/brocolli.png',
  },
  {
    id:2,
    category: 'Fresh',
    name: 'Fresh Banana Fruits',
    price: 20.0,
    dealPrice: 14.0,
    ratingStar: 5,
    imgUrl: '/banana.png',
  },
  {
    id:3,
    category: 'Millets',
    name: 'White Nuts',
    price: 20.0,
    dealPrice: 15.0,
    ratingStar: 5,
    imgUrl: '/white_nuts.png',
  },
  {
    id:4,
    category: 'Health',
    name: 'Mung Bean',
    price: 20.0,
    dealPrice: 11.0,
    ratingStar: 5,
    imgUrl: '/mung_bean.png',
  },
  {
    id:5,
    category: 'Nuts',
    name: 'Brown Hazelnut',
    price: 20.0,
    dealPrice: 12.0,
    ratingStar: 5,
    imgUrl: '/hazelnut.png',
  },
  {
    id:6,
    category: 'Fresh',
    name: 'Eggs',
    price: 20.0,
    dealPrice: 17.0,
    ratingStar: 5,
    imgUrl: '/eggs.png',
  },
  {
    id:7,
    category: 'Fruits',
    name: 'Cucumber',
    price: 20.0,
    dealPrice: 11.0,
    ratingStar: 5,
    imgUrl: '/cucumber.png',
  },

  {
    id:8,
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
          ({ category, name, price, dealPrice, ratingStar, imgUrl, id }) => (
            <Fragment key={id}>
              <ProductItem
                category={category}
                name={name}
                price={price}
                deal={dealPrice}
                rating={ratingStar}
                imgUrl={imgUrl}
                id={id}
              />
            </Fragment>
            
           
          )
        )}
      </div>
      <Button className='mx-auto block bg-green-100 pr-32 pl-32 pt-3 pb-3 font-dmSan text-sm font-medium text-white md:text-base'>
        Next Page
      </Button>
    </>
  )
}

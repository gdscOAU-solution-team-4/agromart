import Button from '../atoms/Button'
import ProductItem from '../shop/ProductItem'
import { STATIC_PRODUCTS } from '../shop/ProductsList'

export default function Products() {
  return (
    <section className='my-20 px-1 md:px-0 lg:px-5'>
      <div className='px-7 md:px-4 lg:px-20'>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4'>
          {STATIC_PRODUCTS.map(
            ({ category, name, price, dealPrice, ratingStar, imgUrl, id }) => (
              <ProductItem
                key={id}
                category={category}
                name={name}
                price={price}
                deal={dealPrice}
                rating={ratingStar}
                imgUrl={imgUrl}
                id={id}
              />
            )
          )}
        </div>
        <Button className='my-10 rounded-2xl bg-[#274C5B] py-5 px-6 text-sm font-bold text-white md:text-xl'>
          Load More
          {/* insert arrow right */}
        </Button>
      </div>
    </section>
  )
}

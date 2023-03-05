import Button from '../atoms/Button'
import ProductItem from '../shop/ProductItem'
import { STATIC_PRODUCTS } from '../shop/ProductsList'

export default function OfferWProducts() {
  return (
    <section className='my-24 px-1 md:px-0 lg:px-5'>
      <div className='rounded-[.625rem] bg-green-gradient px-7 md:px-4 lg:px-20'>
        <div className='py-6 px-5'>
          <div className='flex flex-col-reverse items-center lg:items-start'>
            <div className='my-7 flex w-full flex-col items-center justify-between gap-7 text-center  lg:flex-row'>
              <h3 className='font-roboto text-3xl font-extrabold text-white md:text-[3.125rem]'>
                We Offer Organic For You
              </h3>
              <Button className='rounded-2xl bg-[#EFD372] font-roboto text-sm font-bold text-[#274C5B] hover:!border-white hover:!text-white md:text-xl'>
                View All Product
                {/* insert arrow right */}
              </Button>
            </div>
            <h4 className='font-yellowtail text-2xl text-[#7EB693] md:text-4xl'>
              Offer
            </h4>
          </div>
          <div className='my-5 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4'>
            {STATIC_PRODUCTS.map(
              ({
                category,
                name,
                price,
                dealPrice,
                ratingStar,
                imgUrl,
                id,
              }) => (
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
        </div>
      </div>
    </section>
  )
}

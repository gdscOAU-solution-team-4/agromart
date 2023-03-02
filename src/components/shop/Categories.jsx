import { A11y, Autoplay, Keyboard, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// import { register,  } from 'swiper/element/bundle'
import CategoryCard from './CategoryCard'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const categories = [
  {
    imageUrl: '/vegetables.png',
    categoryName: 'Vegetable',
  },
  {
    imageUrl: '/proteins.png',
    categoryName: 'Proteins',
  },
  {
    imageUrl: '/food.png',
    categoryName: 'Food',
  },
  {
    imageUrl: '/food.png',
    categoryName: 'Food',
  },
  {
    imageUrl: '/food.png',
    categoryName: 'Food',
  },
]

export default function Categories() {
  return (
    <div className='flex w-full gap-8 space-x-4 px-0 pt-8'>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        keyboard={{
          enabled: true,
        }}
        a11y={{
          enabled: true,
          containerMessage: 'wraps slides of reviews from clients',
          containerRoleDescriptionMessage: 'container for reviews from clients',
          itemRoleDescriptionMessage: 'This is a review from our client',
        }}
        onKeyPress={(swiper, key) => {
          if (key !== 75) return
          swiper.autoplay.pause()
        }}
        style={{
          height: 'fit-content',
          paddingBottom: '35px',
        }}
        modules={[Pagination, Autoplay, Keyboard, A11y]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {categories.map(({ imageUrl, categoryName }, i) => (
          <SwiperSlide key={i}>
            <div className='flex-none overflow-hidden'>
              <CategoryCard imageUrl={imageUrl} categoryName={categoryName} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

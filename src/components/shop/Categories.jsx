import { Fragment } from 'react'
import CategoryCard from './CategoryCard'

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
    <div className='flex flex-row px-0 w-full flex-nowrap space-x-4 pt-8 gap-8 justify-items-center overflow-x-auto'>
      {categories.map(({ imageUrl, categoryName }, i) => (
        <div className="flex-none w-1/3 overflow-hidden">
          <CategoryCard key={i} imageUrl={imageUrl} categoryName={categoryName} />
        </div>
        
      ))}
    </div>
  )
}

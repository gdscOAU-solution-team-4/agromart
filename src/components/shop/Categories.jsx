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
]

export default function Categories() {
  return (
    <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
      {categories.map(({ imageUrl, categoryName }, i) => (
        <CategoryCard key={i} imageUrl={imageUrl} categoryName={categoryName} />
      ))}
    </div>
  )
}

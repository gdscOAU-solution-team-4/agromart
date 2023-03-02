import Card from '../interface/Card'

export default function CategoryCard({ categoryName, imageUrl }) {
  return (
    <Card className='flex flex-col items-center justify-center bg-green-gradient py-11'>
      <div>
        <img src={imageUrl} alt={categoryName} />
      </div>
      <p className='my-3 font-workSans text-base font-semibold text-white md:text-3xl'>
        {categoryName}
      </p>
    </Card>
  )
}

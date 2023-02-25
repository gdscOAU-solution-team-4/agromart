import Card from '../UI/Card'

export default function CategoryCard({ categoryName, imageUrl }) {
  return (
    <Card className='bg-green-gradient flex flex-col justify-center items-center py-7'>
      <div>
        <img src={imageUrl} alt={categoryName} />
      </div>
      <p className='font-workSans font-semibold md:text-3xl text-base text-white my-3'>
        {categoryName}
      </p>
    </Card>
  )
}

import { Icon } from '@iconify/react'
import Card from '../UI/Card'
import Categories from './Categories'

export default function Header() {
  return (
    <>
      <div className='mb-12'>
        <h1 className='font-ubuntu font-bold md:text-6xl text-3xl text-black flex items-center gap-1'>
          Welcome Oluwajuwon
          <span>
            <Icon icon='noto:waving-hand-medium-dark-skin-tone' />
          </span>
        </h1>
        <p className='font-medium lg:text-[1.6875rem] text-base pr-3 mt-2 mb-5 font-workSans'>
          Find Your Favourite Farm Product at affordable prices
        </p>
      </div>

      <div>
        <Card className='p-0 px-5 py-0 bg-green-100 bg-opacity-10 max-w-2xl flex items-center'>
          <label
            htmlFor='search'
            className='border-[.625rem] border-transparent'
          >
            <Icon
              icon='ri:search-line'
              className='text-green-100 font-extrabold text-3xl'
            />
          </label>
          <input
            type='search'
            name='search'
            id='search'
            placeholder='search anything...'
            className='bg-transparent p-5 placeholder:text-black font-roboto text-black basis-full focus:border-none focus:outline-none peer'
          />
          <button className='peer-focus:block hidden text-3xl'>
            <Icon icon='ri:close-fill' />
          </button>
        </Card>
      </div>

      <div className='flex items-center justify-between font-workSans font-semibold text-2xl md:text-4xl my-7'>
        <h2 className='text-blue-100'>Explore Categories</h2>
        <span className='text-orange'>View More</span>
      </div>

      <Categories />
    </>
  )
}

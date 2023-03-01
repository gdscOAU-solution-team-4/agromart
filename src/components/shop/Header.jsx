import { Icon } from '@iconify/react'
import useUserData from '../../hooks/useUserData';
import Card from '../interface/Card'
import Categories from './Categories'

export default function Header() {
  let userSurname = useUserData()?.surname;
  return (
    <>
      <div className='mb-12'>
        <h1 className='flex items-center gap-1 font-ubuntu text-3xl font-bold text-black md:text-6xl'>
          Welcome {userSurname || "user"}
          <span>
            <Icon icon='noto:waving-hand-medium-dark-skin-tone' />
          </span>
        </h1>
        <p className='mt-2 mb-5 pr-3 font-workSans text-base font-medium lg:text-[1.6875rem]'>
          Find Your Favourite Farm Product at affordable prices
        </p>
      </div>

      <div>
        <Card className='flex max-w-2xl items-center bg-green-100 bg-opacity-10 p-0 px-5 py-0'>
          <label
            htmlFor='search'
            className='border-[.625rem] border-transparent'
          >
            <Icon
              icon='ri:search-line'
              className='text-3xl font-extrabold text-green-100'
            />
          </label>
          <input
            type='search'
            name='search'
            id='search'
            placeholder='search anything...'
            className='peer basis-full bg-transparent p-5 font-roboto text-black placeholder:text-black focus:border-none focus:outline-none'
          />
          <button className='hidden text-3xl peer-focus:block'>
            <Icon icon='ri:close-fill' />
          </button>
        </Card>
      </div>

      <div className='my-9 flex items-center justify-between font-workSans text-2xl font-semibold '>
        <h2 className='text-blue-100'>Explore Categories</h2>
      </div>

      <Categories />
    </>
  )
}

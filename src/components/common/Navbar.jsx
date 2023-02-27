import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  // this is really nice but can you follow the camel casing convention please ?
  //never (smiles)

  let links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Pages', link: '/pages' },
    { name: 'Shop', link: '/shop' },
    { name: 'Projects', link: '/#' },
  ]

  const [click, setClick] = useState(false)

  return (
    <div className=' sticky top-0 left-0 z-[999] w-full bg-white px-1 shadow-md md:px-0 lg:px-5'>
      <div className='items-center justify-between gap-3 py-8 px-7 md:flex md:w-full md:px-4 lg:px-20'>
        <div className='font-roboto text-xl font-bold text-[#0E563F]'>
          Agromart
        </div>

        <div
          onClick={() => setClick(!click)}
          className='text-md absolute right-8 top-6 cursor-pointer md:hidden'
        >
          {click ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25'
              />
            </svg>
          )}
        </div>

        <ul
          className={`absolute left-0 z-[-1] w-full bg-white pl-5 pb-12 transition-all duration-300 ease-in md:static  md:z-auto md:flex md:w-auto md:items-center md:pl-0 md:pb-0 ${
            click ? 'top-[4rem]' : 'top-[-430px]'
          }`}
        >
          {links.map(link => (
            <li
              key={link.name}
              className='text-md my-7 font-poppins text-base font-medium md:my-0 md:ml-8'
            >
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  isActive
                    ? 'text-slate-800 duration-300  hover:text-slate-800'
                    : 'text-slate-900 duration-300  hover:text-slate-800'
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <div className='flex items-center justify-start gap-3 md:hidden'>
            <div className='flex cursor-pointer items-center gap-2 rounded-full border py-1 px-2'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full bg-slate-800'>
                <Icon
                  icon='ic:round-shopping-cart'
                  color='white'
                  width='20'
                  height='20'
                />
              </div>
              <div className=''>
                <span className='text-md font-semibold'>Cart(1)</span>
              </div>
            </div>
          </div>
        </ul>
        <div className='hidden items-center justify-center gap-3 md:flex'>
          <div className='flex cursor-pointer items-center gap-2 rounded-full border py-1 px-2'>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-slate-800'>
              <Icon
                icon='ic:round-shopping-cart'
                color='white'
                width='20'
                height='20'
              />
            </div>
            <div className=''>
              <span className='text-md font-semibold'>Cart(0)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

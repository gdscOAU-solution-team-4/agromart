import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

  let links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Pages', link: '/pages' },
    { name: 'Shop', link: '/shop' },
    { name: 'Projects', link: '/#' },
  ]

  const [click, setClick] = useState(false)

  const handleLinkClick = link => {
    setActiveLink(link)
  }

  return (
    <div className=' w-full z-[999] sticky bg-white shadow-md top-0 left-0 px-1 lg:px-5 md:px-0'>
      <div className='md:flex items-center justify-between md:w-full py-8 md:px-4 lg:px-20 gap-3 px-7'>
        <div className='font-roboto font-bold text-xl text-[#0E563F]'>
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
              className='w-6 h-6'
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
              className='w-6 h-6'
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
          className={`md:flex bg-white md:items-center pl-5 md:pl-0 md:z-auto md:w-auto md:pb-0 md:static pb-12 absolute  z-[-1] left-0 w-full transition-all duration-300 ease-in ${
            click ? 'top-[4rem]' : 'top-[-430px]'
          }`}
        >
          {links.map(link => (
            <li
              key={link.name}
              className='md:ml-8 text-md md:my-0 my-7 font-poppins font-medium text-base'
            >
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  isActive
                    ? 'hover:text-slate-800 text-slate-800  duration-300'
                    : 'hover:text-slate-800 text-slate-900  duration-300'
                }
              >
                {/*  className={` ${
                  activeLink === link.name
                    ? 'text-slate-800'
                    : 'text-slate-900 '
                }`} */}
                {link.name}
                {/* we can utilize React Router DOM here
              <a
                href={link.link}
                className={`hover:text-slate-800 text-slate-800 font-poppins font-medium text-base duration-300 ${
                  activeLink === link.name
                    ? 'text-slate-800'
                    : 'text-slate-900 '
                }`}
                onClick={() => handleLinkClick(link.name)}
              >
                {link.name}
              </a> */}
              </NavLink>
            </li>
          ))}
          <div className='md:hidden flex justify-start gap-3 items-center'>
            <div className='cursor-pointer border py-1 px-2 rounded-full flex gap-2 items-center'>
              <div className='w-8 h-8 rounded-full bg-slate-800 flex justify-center items-center'>
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

            <div>
              <Link to='/register'>
                <button className='bg-[#0E563F] w-32 py-3 rounded-xl text-white font-semibold'>
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </ul>
        <div className='hidden md:flex justify-center gap-3 items-center'>
          <div className='cursor-pointer border py-1 px-2 rounded-full flex gap-2 items-center'>
            <div className='w-8 h-8 rounded-full bg-slate-800 flex justify-center items-center'>
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

import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/common/Navbar'

const AuthLayout = ({
  heading,
  subHeading,
  children,
  authImg,
  handleLink,
  buttonContent,
  quesion,
  questionLink,
  questionLinkText,
  handleSubmit,
  disabled
}) => {
  return (
    <Fragment>
      <Navbar />
      
      <div className=' w-full flex sticky top-0 right-0  bg-[#F9F8F8]'>
        <div className="lg:w-1/2 w-full md:h-auto md:block hidden  ">
          <img src={authImg} alt="auth img" className='w-full h-full object-cover '/>
       </div>

      <div className="w-full h-auto lg:w-1/2 flex flex-col">
      <div className="pt-24 md:pt-10">
      <div className="">
          <h1 className='text-4xl font-heldane text-[#141414] font-semibold text-center '>{heading || 'Hello 👋🏾'}</h1>
          <p className='text-xl my-5 font-dmSan text-[#141414] font-400 text-center'>{subHeading || 'Create a new account '}</p>
      </div>

        {
          children
        }

        <div >
              <Link to={handleLink} className="pt-10 flex justify-center items-center">
                <button onClick={handleSubmit} disabled={disabled} className='bg-[#0E563F]   w-1/2 py-3 rounded-xl text-white font-semibold capitalize'>{ buttonContent || "Get Started" }</button>
              </Link>
            </div>
            <div className='py-8 text-sm font-dmSan font-500 text-[#141414] text-center '>
              {quesion}{' '}
              <span>
                <Link to={questionLink} className='text-[#0E563F]'>
                  {questionLinkText}
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default AuthLayout

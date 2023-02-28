import { Link } from 'react-router-dom'
import fruit from '../../assets/img/fruit2.png'

export default function Aboutus() {
  return (
    <div className='bg-[#fff] grid grid-cols-2  py-20  w-full'>
      <div>
        <img  src={fruit} alt="" />
      </div>
      <div className='py-9'>
      <h5 className='font-yellowtail text-xl text-[#68A47F]'>
         About Us
        </h5>
        <h2 className='text-4xl leading-[45px] font-roboto text-slate-900 font-bold'>
          We do Creative <br />
          Things for Success <br />
          
        </h2>
        <div className='mt-3'>
          <span className='text-gray-700'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, velit voluptates perspiciatis corporis aliquid, nesciunt, accusamus laborum enim quis hic ea sed odio reiciendis neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, possimus?
          </span>
        </div>
        <div className='my-9'>
          <span className='text-gray-700'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, velit voluptates perspiciatis corporis aliquid, nesciunt, accusamus laborum enim quis hic ea sed odio reiciendis neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, possimus?
          </span>
        </div>
      </div>

      
    </div>
  )
}

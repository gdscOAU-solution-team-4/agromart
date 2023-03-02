import { icon } from '../../assets'
import { icon2 } from '../../assets'
import { icon3 } from '../../assets'
import { icon4 } from '../../assets'
import { icon5 } from '../../assets'
import { plant } from '../../assets'
import { Link } from 'react-router-dom'
export default function WhyChooseUs() {
    return(
       <div className='bg-slate-200 py-20 md:px-36 px-4 w-full'>
         <div className="  md:grid grid-cols-2 gap-4 ">
       
       <div className='py-9'>
       <h5 className='font-yellowtail text-xl text-[#68A47F]'>
          Why choose us
         </h5>
         <h2 className='text-4xl leading-[45px] font-roboto text-slate-900 font-bold'>
         We do not buy from the <br />open market & traders. <br />
                             
           
         </h2>
         <div className='mt-3'>
           <span className='text-gray-700'>
           Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown
           </span>
         </div>
        <div>
        <div className='my-5 bg-gray-300 flex gap-3 px-3 py-4 rounded-full w-1/2'>
           <div>
             <img className='mt-1' src={icon} alt="bullet" />
           </div>
           <div>
             <span>100% Natural Product</span>
           </div>
         </div>
         <div className='text-sm px-10'>
             <span >Simply dummy text of the printing and typesetting industry Lorem Ipsum</span>
         </div>
        </div>
 
        <div className='my-9'>
        <div className='my-5 bg-gray-300 flex gap-3 px-3 py-4 rounded-full w-1/2'>
           <div>
             <img className='mt-1' src={icon} alt="bullet" />
           </div>
           <div>
             <span> Increases resistance</span>
           </div>
         </div>
         <div className='text-sm px-10'>
             <span >Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</span>
         </div>
        </div>
         
 
        
        
       </div>
       <div className='py-4'>
         <img  src={plant} alt="plant" />
       </div>
 
 
 
         </div>

         <div className='grid md:grid-cols-4 gap-5 px-9'>
            <div className='bg-white px-3 py-16  rounded-2xl text-center mb-4'>
                <div className='flex justify-center'>
                <img src={icon2} alt="icon1" />
                </div>
                <div>
                    <h5 className='font-bold text-slate-700 text-xl'>Return Policy</h5>
                </div>
                <div className='my-5'>
                    <span className='text-sm '>
                    Simply dummy text of the printintypesetting industry.
                    </span>
                </div>

            </div>

            <div className='bg-white px-3 py-16  rounded-2xl text-center mb-4'>
                <div className='flex justify-center'>
                <img src={icon3} alt="icon2" />
                </div>
                <div>
                    <h5 className='font-bold text-slate-700 text-xl'>100% Fresh</h5>
                </div>
                <div className='my-5'>
                    <span className='text-sm '>
                    Simply dummy text of the printintypesetting industry.
                    </span>
                </div>

            </div>

            <div className='bg-white px-3 py-16  rounded-2xl text-center mb-4'>
                <div className='flex justify-center'>
                <img src={icon4} alt="icon3" />
                </div>
                <div>
                    <h5 className='font-bold text-slate-700 text-xl'>Support 24/7</h5>
                </div>
                <div className='my-5'>
                    <span className='text-sm '>
                    Simply dummy text of the printintypesetting industry.
                    </span>
                </div>

            </div>

            <div className='bg-white px-3 py-16  rounded-2xl text-center mb-4'>
                <div className='flex justify-center'>
                <img src={icon5} alt="icon4" />
                </div>
                <div>
                    <h5 className='font-bold text-slate-700 text-xl'>Secured Payment
</h5>
                </div>
                <div className='my-5'>
                    <span className='text-sm '>
                    Simply dummy text of the printintypesetting industry.
                    </span>
                </div>

            </div>

         </div>
       </div>
    )
}
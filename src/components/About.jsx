import point1 from '../assets/icon.png'
import point2 from '../assets/icon 2.png'
import pics from '../assets/flower.png'
export default function About() {
    return (
      <div className="bg-gray-300 px-28 py-10 mt-40 grid grid-cols-2">
        <div>
            <img src={pics} alt="" />
        </div>
        <div className='py-4'>
            <div>
            <h2 className='text-md italic text-green-600 block'>About Us </h2>
            </div>
            <div>
            <h1 className='text-4xl font-bold text-slate-700'>We Believe in Working <br /> Accredited Farmers</h1>
            </div>
            <div className='mt-3'>
                <span>Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</span>
            </div>

            <div className='flex gap-2 mt-6'>
                <div className='mt-2'>
                    <img className='w-16' src={point1} alt="" />

                </div>
                <div>
                    <div>
                        <span className='text-slate-700 font-bold text-md'>Organic Foods Only</span>
                    </div>
                    <div className=''>
                        <span className='text-xs'>Simply dummy text of the printing and  typesetting <br /> industry. Lorem Ipsum</span>
                    </div>
                </div>

            </div>

            <div className='flex gap-2 mt-6'>
                <div className='mt-2'>
                    <img className='w-16' src={point2} alt="" />

                </div>
                <div>
                    <div>
                        <span className='text-slate-700 font-bold text-md'>Quality Standards</span>
                    </div>
                    <div className=''>
                        <span className='text-xs'>Simply dummy text of the printing and  typesetting <br /> industry. Lorem Ipsum</span>
                    </div>
                </div>

            </div>

            <div className='mt-10'>
                <button className='px-8 py-3 rounded-lg bg-slate-700 text-white font-semibold'>Shop Now</button>
            </div>
        </div>
       
        
        
        
      </div>
    );
  }
  
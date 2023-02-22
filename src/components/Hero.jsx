import hero from '../assets/image.png'

export default function Hero() {
    return (
      <div className='md:bg-contain bg-no-repeat py-48 px-32' style={{ 
        backgroundImage: `url(${hero})` ,
        height:'898px',
        }}>
       <div>
       <span className='text-5xl font-bold text-slate-700'>Choose the best <br /> healthier way <br /> of life</span>
       </div>
       <div className='mt-9'>
        <button className='bg-yellow-400 px-7 py-2 text-slate-700 rounded-md'>Explore</button>
       </div>

      </div>
    );
  }
  
import { mainImg } from "../../assets";
export default function Hero() {
    return (
      <div className="w-full mb-5 flex items-center pt-8 bg-[#F1EFF0] ">
        <div className="w-1/2 flex flex-col pl-20">
          <h5 className='font-yellowtail text-xl text-[#68A47F]'>100% Natural Food</h5>
          <h2 className="text-6xl leading-[70px] font-roboto text-slate-900 font-bold">Choose the best <br />
              healthier way <br />
              of life
          </h2>
          <div className="pt-5">
            <button className='bg-[#0E563F] w-40 py-3 rounded-xl text-white font-semibold'>Get Started</button>
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-end">
          <img src={mainImg} alt="main image" className="w-[90%] "/>
        </div>
      </div>
    );
  }
  
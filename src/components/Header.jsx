
import logo from '../assets/logo.png'
export default function Header() {
    return (
      <div className="bg-white py-10 m">
        <div className="grid grid-cols-3 max-w-7xl mx-auto  ">
        <div className='flex gap-1'>
           <div>
           <span>
                <img className='w-5 mt-1' src={logo} />
            </span>
           </div>
            <div>
            <span className="font-bold text-2xl text-green-700 ">Agromart</span>
            </div>

        </div>
        <div className="flex gap-7 mt-2 text-md font-semibold">
            <div>
                <a href="">Home</a>
            </div>
            <div>
                <a href="">About</a>
            </div>
            <div>
                <a href="">pages</a>
            </div>
            <div>
                <a href="">Shop</a>
            </div>
            <div>
                <a href="">Projects</a>
            </div>
            <div>
                <a href="">News</a>
            </div>

        </div>

      </div>
      </div>
    )
  }
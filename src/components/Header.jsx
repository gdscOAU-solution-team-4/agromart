import { Icon } from '@iconify/react';

export default function Header() {
    return (
      <div className="bg-gray-300 py-6">
        <div className=" grid grid-cols-3  px-20">
           {/* Logo */}
           <div className="flex">
                <div><img src="" alt="logo" /></div>
                <div>
                    <span className="text-2xl font-bold text-green-700">Agromart</span>
                </div>
            </div>
            {/* /Logo */}
            <div className="flex gap-9 text-md mt-1 font-semibold justify-center">
                <div>
                    <a href="">Home</a>
                </div>
                <div>
                    <a href="">About Us</a>
                </div>
                <div>
                    <a href="">Shop</a>
                </div>
               

            </div>
        <div className="flex gap-4 justify-end">
            <div class="relative hidden md:block">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Search icon</span>
                </div>
                <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>
            <div className="border-2 p-1 rounded-full flex gap-2 items-center">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex justify-center items-center">
                <Icon icon="ic:round-shopping-cart" color="white" width="20" height="20" />

                </div>
                <div className=''>
                    <span className='text-md font-semibold'>Cart(1)</span>
                </div>

            </div>
        </div>




        </div>
        
        
        
      </div>
    );
  }
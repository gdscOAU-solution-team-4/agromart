import { teamPics1 } from "../../assets";

export default function OurTeam() {
    return(
        <div className="bg-white py-20 md:px-20 flex flex-col text-center items-center justify-center">
            <div>
            <h5 className='font-yellowtail text-xl text-[#68A47F]'>
          Team
         </h5>
            </div>
            <div>
            <h5 className="text-4xl font-roboto text-slate-900 font-bold">Our Organic Expert</h5>
            </div>
            <div className="my-6">
                <span className="text-sm">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since <br /> the 1500s, when an unknown printer took a galley.</span>
            </div>
            
            <div className="md:grid grid-cols-3 gap-9 mt-5  ">
                <div className="w-80 rounded-2xl mb-4">
                    <div>
                        <img className="rounded-t-2xl" src={teamPics1} alt="" />
                    </div>
                    <div className="bg-gray-100 px-4 py-5 rounded-b-2xl text-left">
                        <h5 className="text-lg font-roboto text-slate-900 font-bold">Raji Roqeeb</h5>
                        <span className='font-yellowtail text-xl text-[#68A47F]'>Famer</span>
                    </div>
                </div>

                <div className="w-80 rounded-2xl mb-4 shadow-2xl">
                    <div>
                        <img className="rounded-t-2xl" src={teamPics1} alt="" />
                    </div>
                    <div className="bg-gray-100 px-4 py-5 rounded-b-2xl text-left">
                        <h5 className="text-lg font-roboto text-slate-900 font-bold">Raji Roqeeb</h5>
                        <span className='font-yellowtail text-xl text-[#68A47F]'>Famer</span>
                    </div>
                </div>


                <div className="w-80 rounded-2xl mb-4">
                    <div>
                        <img className="rounded-t-2xl" src={teamPics1} alt="" />
                    </div>
                    <div className="bg-gray-100 px-4 py-5 rounded-b-2xl text-left">
                        <h5 className="text-lg font-roboto text-slate-900 font-bold">Raji Roqeeb</h5>
                        <span className='font-yellowtail text-xl text-[#68A47F]'>Famer</span>
                    </div>
                </div>


                


            </div>

        </div>
    )
}
import { offerImg1, offerImg2 } from "../../assets";

export default function Offer() {
    return (
      <div className=" py-14 flex">
        <div className="w-1/2 flex justify-center items-center">
          <img src={ offerImg1 } alt="" className="w-[75%]"/>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img src={ offerImg2 } alt="" className="w-[75%]"/>
        </div> 
      </div>
    );
  }
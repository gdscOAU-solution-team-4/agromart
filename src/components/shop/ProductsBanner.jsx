// import banner from '../../assets/img/productsBG.png'
import banner from 'assets/img/productsBG.png'
export default function ProductsBanner() {
  return (
    <div
      className={`bg-[url('${banner}')] h-80 mt-5 grid place-items-center rounded-2xl font-roboto font-extrabold md:text-[4.375rem] text-3xl text-[#274C5B] bg-center bg-cover`}
    >
      Products
    </div>
  )
}

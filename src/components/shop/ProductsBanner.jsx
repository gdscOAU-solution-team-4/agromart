// import banner from '../../assets/img/productsBG.png'
import banner from 'assets/img/productsBG.png'
export default function ProductsBanner() {
  return (
    <div
      className={`bg-[url('${banner}')] mt-5 grid h-80 place-items-center rounded-2xl bg-cover bg-center font-roboto text-3xl font-extrabold text-[#274C5B] md:text-[4.375rem]`}
    >
      Products
    </div>
  )
}

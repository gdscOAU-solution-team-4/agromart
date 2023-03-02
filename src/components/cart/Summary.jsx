import Button from '../atoms/Button'
import Card from '../interface/Card'

export default function Summary() {
  return (
    <Card className='h-max grow basis-2/5 bg-[linear-gradient(98.81deg,#0E563F_-0.82%,#15BE77_101.53%)] text-[#fefeff]'>
      <div className='font-workSans text-xs font-medium md:text-sm'>
        <p className='my-2 flex items-center justify-between'>
          <span>Sub-Total</span>
          <span>$10700</span>
        </p>
        <p className='my-2 flex items-center justify-between'>
          <span>Delivery Charge</span>
          <span>$150</span>
        </p>
        <p className='my-2 flex items-center justify-between'>
          <span>Discount</span>
          <span>$500</span>
        </p>
      </div>
      <div>
        <p className='my-2 flex items-center justify-between font-workSans text-sm font-bold md:text-lg'>
          <span>Total</span>
          <span>$10350</span>
        </p>
      </div>
      <div>
        <Button className='rounded-[.9375rem] bg-[#fefeff] hover:bg-[#efefff]'>
          <span className='bg-[linear-gradient(98.81deg,#0E563F_-0.82%,#15BE77_101.53%)] bg-clip-text text-xs text-transparent md:text-sm font-bold'>
            Check Out
          </span>
        </Button>
      </div>
    </Card>
  )
}

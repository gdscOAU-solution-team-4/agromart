import { useEffect, useState } from 'react'
import DefaultLayout from '../layout/defaultLayout'

//* calculates deadline
function calculateDeadline() {
  //? difference between current and date
  const difference = +new Date(`2023-03-15`) - +new Date()

  //? Time Left
  let timeLeft
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  return timeLeft
}

export default function Deadline() {
  const [timeLeft, setTimeLeft] = useState(calculateDeadline())

  useEffect(() => {
    //
    const timerId = setTimeout(() => {
      setTimeLeft(calculateDeadline())
    }, 1000)

    //? Clean Up
    return () => {
      clearTimeout(timerId)
    }
  })

  return (
    <DefaultLayout>
      <div
        className={`flex min-h-screen flex-col items-center justify-center bg-white-100 px-1 md:px-0 lg:px-5`}
      >
        <div className='px-7 md:px-4 lg:px-20'>
          <h1 className='text-center font-workSans text-base text-black md:text-5xl'>
            Deadline
          </h1>
          {Object.entries(timeLeft).map((item, i) => (
            <span

              className={`mx-1 font-openSan text-sm font-extrabold md:text-4xl ${
                item[0] && 'after:content-["_:"]'
              } last-of-type:after:content-none ${
                timeLeft.days < 5 ? 'text-red-700' : 'text-primary'
              }`}
              key={i}
            >
              {item[0] ? `${item[1]} ${item[0]}` : ''}
            </span>
          ))}
        </div>
      </div>
    </DefaultLayout>
  )
}

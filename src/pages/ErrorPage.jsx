import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div id='error-page' className='grid min-h-screen place-items-center'>
      <div className='text-center'>
        <h1 className='font-dmSan text-2xl font-bold md:text-5xl'>Oops!</h1>
        <p className='my-3 font-roboto'>
          Sorry, an unexpected error has occurred.
        </p>
        <p className='font-roboto text-sm font-bold md:text-base'>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  )
}

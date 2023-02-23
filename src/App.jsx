import { Route, Routes } from 'react-router-dom'
import BuyerDash from './pages/BuyerDash'

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/shop' element={<BuyerDash />} />
      </Routes>
    </>
  )
}

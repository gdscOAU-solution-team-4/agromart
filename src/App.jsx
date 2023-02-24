import { Route, Routes } from 'react-router-dom'

import ForgotPassword from './pages/forgotPassword'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import UserOnboard from './pages/userOnboard'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/forgotten-password' element={<ForgotPassword />} />
        <Route path='/onboard' element={<UserOnboard />} />
      </Routes>
    </>
  )
}

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './App'
import BuyerDash from './pages/BuyerDash'
import ErrorPage from './pages/ErrorPage'
import ForgotPassword from './pages/forgotPassword'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

// creates routes and returns router object for app
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/shop' element={<BuyerDash />} />
        <Route path='/forgotten-password' element={<ForgotPassword />} />
      </Route>
    </Route>
  )
)

export default router

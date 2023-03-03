import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './App'
import Onboard from './components/redirect/redirect'
import Test from './context'
import AboutUs from './pages/AboutUs'
import BuyerDash from './pages/BuyerDash'
import Cart from './pages/Cart'
import Deadline from './pages/Deadline'
import ErrorPage from './pages/error/ErrorPage'
import FarmerDashboard from './pages/farmer/farmerDashboard'
import FarmerOnBoard from './pages/farmer/FarmerOnBoard'
import ForgotPassword from './pages/forgotPassword'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
// creates routes and returns router object for app
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Deadline />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/buyer-dashboard' element={<BuyerDash />} />
        <Route path='/forgotten-password' element={<ForgotPassword />} />
        <Route path='/onboard/supplier' element={<FarmerOnBoard />} />
        <Route path='/farmer-dashboard' element={<FarmerDashboard />} />
        <Route path='/onboard' element={<Onboard />} />
        <Route path='/product-form' element={<Test />} />
        <Route path='/about' element={<AboutUs />} />
      </Route>

    </Route>
  )
)
export default router
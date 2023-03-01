import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
      {/* renders all children i.e all other routes */}
      <Outlet />
    </>
  )
}

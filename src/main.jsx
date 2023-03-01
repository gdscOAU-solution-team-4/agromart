import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import './index.css'
import router from './Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* react router dom v6.8.1 */}
    <RouterProvider router={router} />
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import AppLogin from './AppLogin'

import './index.css'

ReactDOM.createRoot(document.getElementById('login') as HTMLElement).render(
  <React.StrictMode>
    <AppLogin />
  </React.StrictMode>
)

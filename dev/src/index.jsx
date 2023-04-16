import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// import '../node_modules/@plake492/t_css_utils/src/index.scss'
// import '../node_modules/@plake492/t_css_utils/dist/reset.css'
// import '../node_modules/@plake492/t_css_utils/dist/index.css'
import './styles/app.scss'

const rootElement = document.getElementById('root')

const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

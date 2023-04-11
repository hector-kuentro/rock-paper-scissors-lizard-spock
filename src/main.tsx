import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './globals.scss'
import MainContextProvider from './context/MainContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </React.StrictMode>,
)

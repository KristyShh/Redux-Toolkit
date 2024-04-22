import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './theme/themeProwider.tsx'
import {BrowserRouter} from 'react-router-dom'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>  
    <BrowserRouter>
    <ThemeProvider>  
    <App />
    </ThemeProvider>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)

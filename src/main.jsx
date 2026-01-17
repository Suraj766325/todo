import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>          
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
          <RouterProvider router={router}/>
        </Provider>
  </StrictMode>,
)

import { Error } from './components/pages/error'
import './components/header.css'
import { Main } from './components/pages/main'
import { Counter } from './components/pages/counter'
import {Routes, Route} from 'react-router-dom'
import { Layout } from './components/pages/layout'
import { UserPage } from './components/pages/userPage'
import { RegistrationForm } from './components/pages/registrationForm'
import { PrivatePage } from './components/pages/privatePage'
import { PrivateRoute } from './components/pages/privateRoute'



function App() {  
  return (
    <>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/counter" element={<Counter />} />    
        <Route path="/UserPage" element={<UserPage/>} />
        <Route element={<PrivateRoute />}> 
          <Route path="/privatePage" element={<PrivatePage />} />
        </Route>
        <Route path="/login" element={<RegistrationForm/>} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
    </>
  )
}

export default App;
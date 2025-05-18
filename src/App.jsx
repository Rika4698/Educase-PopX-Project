
import './App.css'
import { Route, Routes } from "react-router";
import Home from './Pages/Home';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import UserProfile from './Pages/UserProfile';
function App() {


  return (
    <div className='min-h-screen flex justify-center items-center gap-2'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/user' element={<UserProfile />}></Route>

      </Routes>
    </div>
  )
}

export default App

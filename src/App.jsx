
import './App.css'
import { Route, Routes } from "react-router";
import Home from './Pages/Home';
function App() {
 

  return (
    <div className='min-h-screen flex justify-center items-center gap-2'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>

      </Routes>
    </div>
  )
}

export default App

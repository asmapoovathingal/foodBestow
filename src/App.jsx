import {Route,Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import View from './pages/View'
import Foods from './components/Foods'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Auth insideRegister={true}/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/view' element={<View/>}/>
      <Route path='/foods' element={<Foods/>}/>
  
    </Routes>
    </>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Messages from './pages/Messages'
import Profile from './pages/Profile'

function App() {
  return (
    <>
      <NavBar/>

      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/messages" element={<Messages/>}/>
          <Route path="/profile" element={<Profile/>}/>

        </Routes>
      </main>
    </>
  )
}

export default App

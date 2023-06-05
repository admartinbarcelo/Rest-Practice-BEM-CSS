import './App.css'

import Navbar from "./components/Navbar/Navbar"
import About from './container/About/About'
import Header from './container/Header/Header'
import Menu from './container/Menu/Menu'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Menu />
    </div>
  )
}

export default App

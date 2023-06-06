import './App.css'

import Navbar from "./components/Navbar/Navbar"
import About from './container/About/About'
import Header from './container/Header/Header'
import Intro from './container/Intro/Intro'
import Menu from './container/Menu/Menu'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Menu />
      <Intro />
    </div>
  )
}

export default App

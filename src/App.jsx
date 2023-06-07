import './App.css'

import Navbar from "./components/Navbar/Navbar"
import About from './container/About/About'
import Header from './container/Header/Header'
import Menu from './container/Menu/Menu'
import Gallery from './container/Gallery/Gallery'
import Intro from './container/Intro/Intro'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Menu />
      <Intro />
      <Gallery />
    </div>
  )
}

export default App

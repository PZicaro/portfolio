import './App.css'

import  FirstPage  from './components/FirstPage/FirstPage'
import HeaderComponent from './components/Header/HeaderComponent'
import AboutMePage from './components/AboutMe/AboutMePage'
import SitePage from './components/sitesPage/SitePage'
import Contato from './components/ContatoPage/Contato'
import Footer from './components/Footer/Footer'
import Tecnologies from './components/Tec/Tecnologies'


import { ImageContext, imagens } from './contexts/ImageContext'
function App() {
  

  return (
    <>
    <ImageContext.Provider value={imagens}>
    <HeaderComponent  />
    <FirstPage />
    <AboutMePage />
    <Tecnologies />
    <SitePage/>
    <Contato />
    <Footer/>
    </ImageContext.Provider>


   
    </>
  )
}

export default App

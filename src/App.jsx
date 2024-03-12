
import photoHeader from './public/foto.png'
import gitLogo from './public/carbon_logo-github.svg'
import gitLogoContato from './public/github_contact.svg'
import './App.css'
import  FirstPage  from './components/FirstPage/FirstPage'
import HeaderComponent from './components/Header/HeaderComponent'
import emoji from './public/Fame.svg'
import upload from './public/upload.svg'
import AboutMePage from './components/AboutMe/AboutMePage'
import foto from './public/foto.png'
import Tecnologies from './components/Tec/Tecnologies'
import html from './public/html.svg'
import js from './public/js.svg'
import react from './public/react.svg'
import css3 from './public/css3.svg'
import bootstrap from './public/bootstrap.svg'
import sass from './public/sass.svg'
import firebase from './public/firebase.svg'
import wpp from './public/whatsapp.svg'
import linkedin from './public/linkedin.svg'
import Contato from './components/ContatoPage/Contato'
import SitePage from './components/sitesPage/SitePage'
import Footer from './components/Footer/Footer'
function App() {
  let imagens = [photoHeader, gitLogo, emoji, upload, foto, wpp, linkedin, gitLogoContato, html, js, react, css3, bootstrap,sass, firebase];
  

  return (
    <>
    <HeaderComponent  imagens ={imagens}/>
    <FirstPage image={imagens}/>
    <AboutMePage image={imagens}/>
    <Tecnologies tecImages={imagens}/>
    <SitePage/>
    <Contato image={imagens}/>
    <Footer/>


   
    </>
  )
}

export default App

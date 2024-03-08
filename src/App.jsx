
import photoHeader from './public/Avatar.svg'
import gitLogo from './public/carbon_logo-github.svg'
import gitLogoContato from './public/github_contact.svg'
import './App.css'
import  FirstPage  from './components/FirstPage/FirstPage'
import HeaderComponent from './components/Header/HeaderComponent'
import emoji from './public/Fame.svg'
import upload from './public/upload.svg'
import AboutMePage from './components/SobreMim/AboutMePage'
import foto from './public/foto.jpg'
import Tecnologies from './components/Tec/Tecnologies'
import html from './public/html.svg'
import wpp from './public/whatsapp.svg'
import linkedin from './public/linkedin.svg'
import Contato from './components/ContatoPage/Contato'
import SitePage from './components/sitesPage/SitePage'
function App() {
  let imagens = [photoHeader, gitLogo, emoji, upload, foto, wpp, linkedin, gitLogoContato];
  

  return (
    <>
    <HeaderComponent  imagens ={imagens}/>
    <FirstPage image={imagens}/>
    <AboutMePage image={imagens}/>
    <Tecnologies tecImages={html}/>
    <SitePage/>
    <Contato image={imagens}/>


   
    </>
  )
}

export default App

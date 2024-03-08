
import photoHeader from './imagens/Avatar.svg'
import gitLogo from './imagens/carbon_logo-github.svg'
import gitLogoContato from './imagens/github_contact.svg'
import './App.css'
import  FirstPage  from './components/FiestPage/FirstPage'
import HeaderComponent from './components/Header/HeaderComponent'
import emoji from './imagens/Fame.svg'
import upload from './imagens/upload.svg'
import AboutMePage from './components/SobreMim/AboutMePage'
import foto from './imagens/foto.jpg'
import Tecnologies from './components/Tec/Tecnologies'
import html from './imagens/html.svg'
import Contato from './components/ContatoPage/Contato'
import wpp from './imagens/whatsapp.svg'
import linkedin from './imagens/linkedin.svg'

function App() {
  let imagens = [photoHeader, gitLogo, emoji, upload, foto, wpp, linkedin, gitLogoContato];
  

  return (
    <>
    <HeaderComponent  imagens ={imagens}/>
    <FirstPage image={imagens}/>
    <AboutMePage id='about' image={imagens} />
    <Tecnologies  tecImages={html}/>
    <Contato id='contact' image={imagens}/>

   
    </>
  )
}

export default App


import photoHeader from './imagens/Avatar.svg'
import gitLogo from './imagens/carbon_logo-github.svg'
import './App.css'
import  FirstPage  from './components/FiestPage/FirstPage'
import HeaderComponent from './components/Header/HeaderComponent'
import emoji from './imagens/Fame.svg'
import upload from './imagens/upload.svg'
import AboutMePage from './components/SobreMim/AboutMePage'
import foto from './imagens/foto.jpg'
import Tecnologies from './components/Tec/Tecnologies'
import html from './imagens/html.svg'


function App() {
  let imagens = [photoHeader, gitLogo, emoji, upload, foto];

  return (
    <>
    <HeaderComponent imagens ={imagens}/>
    <FirstPage image={imagens}/>
    <AboutMePage image={imagens} />
    <Tecnologies tecImages={html}/>

   
    </>
  )
}

export default App

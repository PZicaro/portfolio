import './style.firstpage.css'
import path from '../../public/curriculo-atualizado.pdf'
import { ImageContext } from '../../contexts/ImageContext';

import  {useContext} from 'react'
// FirstPage.jsx
const FirstPage = () => {
    const imagens = useContext(ImageContext)

    return (
        <div className="container">
            <img src="" alt="" />
            
            <h1>Ícaro Rodrigues</h1>
            <p className='subtitle color'>Desenvolvedor Front-end</p>
            <a className='download'href={path} download>
            <button className='first-page-button'><img src={imagens[3]} alt="" /> Currículo </button>

            </a>

            <div className="bolhas">
                {[...Array(50)].map((_, index) => (
                    <span key={index} style={{ '--i': Math.floor(Math.random() * 30) + 1 }}></span>
                ))}
            </div>
        </div>
    );
}

export default FirstPage;

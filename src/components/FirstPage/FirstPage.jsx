import './style.firstpage.css'
import path from '../../public/curriculo-atualizado.pdf'
// FirstPage.jsx
const FirstPage = ({ image }) => {
    return (
        <div className="container">
            <img src="" alt="" />
            
            <h1>Ícaro Rodrigues</h1>
            <p className='subtitle color'>Desenvolvedor Front-end</p>
            <a href={path} download>
            <button className='first-page-button'><img src={image[3]} alt="" /> Currículo </button>

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

import './style.firstpage.css'

// FirstPage.jsx
const FirstPage = ({ image }) => {
    return (
        <div className="container">
            <img src="" alt="" />
            <p className='color hello'>
                <img src={image[2]} alt="" />
                Hello, World!
            </p>
            <h1>Ícaro Rodrigues</h1>
            <p className='subtitle color'>Desenvolvedor Front-end</p>
            <button className='first-page-button'><img src={image[3]} alt="" /> Currículo </button>

            <div className="bolhas">
                {[...Array(50)].map((_, index) => (
                    <span key={index} style={{ '--i': Math.floor(Math.random() * 30) + 1 }}></span>
                ))}
            </div>
        </div>
    );
}

export default FirstPage;

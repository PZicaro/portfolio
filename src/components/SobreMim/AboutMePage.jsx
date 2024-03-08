import React from 'react';
import './AboutMePage.css'; // Estilo CSS para a página
import Carrossel from '../Carrossel/Carrossel';


const AboutMePage = ({image,}) => {
    return (
        <div id='about-me' className="about-me-container">
            
            <div className="about-me-content">
                <img src={image[4]} alt="Minha Foto" className="profile-picture" /> 
                <div className="text-container">
                    <h1 className="title">Sobre Mim</h1>
                    <p className="description">
                        Olá! Meu nome é Ícaro Rodrigues, tenho 20 anos. Sou um entusiasta da tecnologia, apaixonado por desenvolvimento de software e design de experiência do usuário.
                        Sempre estou buscando aprender novas maneiras de melhorar minhas skills e meu produto. <a href="#" className='text-contact'>Clique aqui para entrar em contato</a>
                    </p>
                    
                    
                </div>
               <Carrossel/>

                </div>
        </div>
    );
}

export default AboutMePage;

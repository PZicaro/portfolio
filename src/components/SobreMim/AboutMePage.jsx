import React from 'react';
import './AboutMePage.css'; // Estilo CSS para a página
import Certificado from '../Certificado/Certificado';


const AboutMePage = ({image,}) => {
    return (
        <div className="about-me-container">
            
            <div className="about-me-content">
                <img src={image[4]} alt="Minha Foto" className="profile-picture" /> 
                <div className="text-container">
                    <h1 className="title">Sobre Mim</h1>
                    <p className="description">
                        Olá! Meu nome é Ícaro Rodrigues, tenho 20 anos. Sou um entusiasta da tecnologia, apaixonado por desenvolvimento de software e design de experiência do usuário.
                        Sempre estou buscando aprender novas maneiras de melhorar minhas skills e meu produto. <a href="#" className='text-contact'>Clique aqui para entrar em contato</a>
                    </p>
                    
                    
                </div>
                <div className="slider">
                    <div className="slides">
                        <input type="radio" name="radio-btn" id="radio1" />
                        <input type="radio" name="radio-btn" id="radio2" />
                        <input type="radio" name="radio-btn" id="radio3" />
                        <input type="radio" name="radio-btn" id="radio4" />
                        <input type="radio" name="radio-btn" id="radio5" />
                        <input type="radio" name="radio-btn" id="radio6" />
                        
                    <div className="slide-box first">
                 <Certificado nomeCertificado={'Segurança da Informação'} classSlide={'certificado1'}/>
                    </div>
                    <div className="slide-box ">
                 <Certificado nomeCertificado={'Mini curso FrontEnd'} classSlide={'certificado2'}/>
                    </div>
                    <div className="slide-box ">
                 <Certificado nomeCertificado={'Mini curso Vue'} classSlide={'certificado3'}/>
                    </div>
                    <div className="slide-box ">
                 <Certificado nomeCertificado={'Curso CSS3'} classSlide={'certificado4'}/>
                    </div>
                    <div className="slide-box ">
                        
                 <Certificado nomeCertificado={'Fundamentos React'} classSlide={'certificado5'}/>
                    </div>
                 

                   
                    </div>
                    <div className="nav-auto">
                    <div className="auto-btn1"></div>
                    <div className="auto-btn2"></div>
                    <div className="auto-btn3"></div>
                    <div className="auto-btn4"></div>
                    <div className="auto-btn5"></div>
                   </div>
                   
                    <div className="nav-manual">
                        <label className="manual-btn" htmlFor="radio1"></label>
                        <label className="manual-btn" htmlFor="radio2"></label>
                        <label className="manual-btn" htmlFor="radio3"></label>
                        <label className="manual-btn" htmlFor="radio4"></label>
                        <label className="manual-btn" htmlFor="radio5"></label>
                    </div> 
                </div>
              
            </div>
            
        </div>
    );
}

export default AboutMePage;

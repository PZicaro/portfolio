import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Sobre</h3>
                    <p>Proffisional empenhado em entregar o melhor produto possível,.</p>
                </div>
                <div className="footer-section">
                    <h3>Links Úteis</h3>
                    <ul>
                        <li><a href="#">Página Inicial</a></li>
                        <li><a href="#about-me">Sobre nós</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contato</h3>
                    <p>Email: icaro2rodrigues@gmail.com</p>
                    <p>Telefone: (77) 98836-4540</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Ícaro Rodrigues. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;

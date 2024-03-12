import React, { useState } from 'react';
import './header.style.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdExit } from "react-icons/io";
function HeaderComponent({ imagens }) {
    // Define o estado para controlar a visibilidade do menu mobile
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    // Define o estado para controlar qual ícone de menu mostrar
    const [menuIcon, setMenuIcon] = useState(<RxHamburgerMenu />);

    // Função para alternar a visibilidade do menu mobile e mudar o ícone
    const toggleMobileMenu = () => {
        setMobileMenuVisible(!mobileMenuVisible);
        // Se o menu mobile está visível, mostra o ícone de saída, caso contrário mostra o ícone do menu hamburger
        setMenuIcon(mobileMenuVisible ? <RxHamburgerMenu /> : <IoMdExit />);
    };

    return (
        <header>
            <div className="container-header">
                <div className="header-content">
                    <a href="#">
                        <img className='image-header'src={imagens[0]} alt="" />
                    </a>

                    <div className="flex">
                        <nav>
                            <ul>
                                <a href="#about-me"><li >Sobre mim</li></a>
                                <a href="#container-tec"><li >Tecnologias</li></a>
                                <a href="#container-site"><li >Projetos</li></a>
                                <a href="#contact"><li >Contato</li></a>
                            </ul>
                        </nav>
                        <div className="btn-github">
                            <a href="https://github.com/PZicaro"><button><img src={imagens[1]} alt="" /> GitHub</button></a>
                        </div>
                    </div>

                    <div className="menu-hamburger" onClick={toggleMobileMenu}>
                        {menuIcon}
                    </div>

                </div>

                <div className={`mobile-menu ${mobileMenuVisible ? 'show' : ''}`}>
                    <nav>
                        <ul>
                            <a href="#about-me"><li >Sobre mim</li></a>
                            <a href="#container-tec"><li >Tecnologias</li></a>
                            <a href="#container-site"><li >Projetos</li></a>
                            <a href="#contact"><li >Contato</li></a>
                            <a href="https://github.com/PZicaro"><li >GitHub</li></a>
                        </ul>
                    </nav>
                </div>

            </div>
        </header>
    );
}

export default HeaderComponent;

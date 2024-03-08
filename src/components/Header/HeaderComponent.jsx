import './header.style.css'

function HeaderComponent
({imagens}) {
    return ( 
        <header>
            <div className="container-header">
                <div className="flex">
                <a href="#">
            <img src={imagens[0]} alt="" />
                </a>

            <nav>
                
                <ul>
                  <a href="#about-me"><li >Sobre mim</li></a>  
                  <a href="#container-tec"><li >Tecnologias</li></a>  
                  <a href=""><li >Projetos</li></a>  
                  <a href="#contact"><li >Contato</li></a>  
                    
                </ul>
            </nav>
            <div className="btn-github">
                
                <a href="https://github.com/PZicaro"><button><img src={imagens[1]} alt="" /> GitHub</button></a>
            </div>

                </div>

            </div>
        </header>
     );
}

export default HeaderComponent
;
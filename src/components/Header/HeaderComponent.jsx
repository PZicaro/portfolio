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
                  <a href=""><li >Sobre mim</li></a>  
                  <a href=""><li >Tecnologias</li></a>  
                  <a href=""><li >Projetos</li></a>  
                  <a href=""><li >Contato</li></a>  
                    
                </ul>
            </nav>
            <div className="btn-github">
                
                <a href="#"><button><img src={imagens[1]} alt="" /> GitHub</button></a>
            </div>

                </div>

            </div>
        </header>
     );
}

export default HeaderComponent
;
import SiteComponent from "../site-component/SiteComponent";
import './SitePage.css'

import enxoval from '../../public/siteCasamento.png'
import taskManager from '../../public/TaskManager.png'
import siteIt from '../../public/Site-It.png'

const SitePage = () => {
    const websites = [
      {
        image: enxoval,
        title: 'Site de Casamento',
        link: 'https://example.com/website1',
        technologies: ['React', 'Styled-components', 'FireBase', 'TypeScript']
      },
      {
        image: taskManager,
        title: 'Administrador de Tarefas',
        link: 'https://task-manager-icr.vercel.app',
        technologies: ['HTML', 'CSS', 'JavaScript']
      },
      {
        image: siteIt,
        title: 'Site Comercial',
        link: 'https://site-it.vercel.app',
        technologies: ['HTML', 'CSS', 'JavaScript']
      },
      {
        image: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg',
        title: 'Website 1',
        link: 'https://example.com/website1',
        technologies: ['HTML', 'CSS', 'JavaScript']
      },
      
      // Add more website objects as needed
    ];
  
    return (
      <div id="container-site">
        <div className="site-content">
          <h1 className="site-text">Alguns Trabalhos</h1>
          <div className="site-card-content">
            {websites.map((website, index) => (
              <SiteComponent
                key={index}
                image={website.image}
                title={website.title}
                link={website.link}
                technologies={website.technologies}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default SitePage;
import SiteComponent from "../site-component/SiteComponent";

const SitePage = () => {
    const websites = [
      {
        image: 'https://cc-prod.scene7.com/is/image/CCProdAuthor/FF-SEO-text-to-image-marquee-mobile-2x?$pjpeg$&jpegSize=100&wid=600',
        title: 'Website 1',
        link: 'https://example.com/website1',
        technologies: ['HTML', 'CSS', 'JavaScript']
      },
      {
        image: 'https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png',
        title: 'Website 1',
        link: 'https://example.com/website1',
        technologies: ['HTML', 'CSS', 'JavaScript']
      },
      {
        image: 'https://www.guiaviagensbrasil.com/imagens/Imagem%20do%20mar%20calma%20e%20belo%20da%20Praia%20da%20Engenhoca-Itacar%C3%A9-Bahia-BA.jpg',
        title: 'Website 1',
        link: 'https://example.com/website1',
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
      <div id="container-tec">
        <div className="tec-content">
          <h1 className="tecnologies-text">My Websites</h1>
          <div className="tec-card-content">
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
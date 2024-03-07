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
        image: 'https://cc-prod.scene7.com/is/image/CCProdAuthor/FF-SEO-text-to-image-marquee-mobile-2x?$pjpeg$&jpegSize=100&wid=600',
        title: 'Website 1',
        link: 'https://example.com/website1',
        technologies: ['HTML', 'CSS', 'JavaScript']
      },
      {
        image: 'https://cc-prod.scene7.com/is/image/CCProdAuthor/FF-SEO-text-to-image-marquee-mobile-2x?$pjpeg$&jpegSize=100&wid=600',
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
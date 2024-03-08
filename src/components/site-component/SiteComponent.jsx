const SiteComponent= ({ image, title, link, technologies }) => {
    return (
        <div className="website-card">
        <div className="image-container">
          <img src={image} alt={title} />
          <div className="overlay">
            <h2>{title}</h2>
            <p>Tecnologias utilizadas: {technologies.join(', ')}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">Visite Esse Site</a>
          </div>
        </div>
      </div>
    );
  };
  export default SiteComponent
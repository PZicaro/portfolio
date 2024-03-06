import './Certificado.css'
function Certificados({nomeCertificado, classSlide}) {
  return ( 
    <div className={classSlide}>
        <div className="filter">
              <p className='filter-text'>{nomeCertificado}</p>
        </div>
    </div>
   );
}

export default Certificados;
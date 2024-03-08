import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './Carrossel.css';

// Importar os estilos opcionais
import certificado1 from '../../public/certificado1.png';
import certificado2 from '../../public/certificado2.png';
import certificado3 from '../../public/certificado3.png';
import certificado4 from '../../public/certificado4.png';
import certificado5 from '../../public/certificado5.png';


const certificados = [
  { imagem: certificado1, texto: 'Segurança da informação', link: 'https://example.com/1' },
  { imagem: certificado2, texto: 'Front-end', link: 'https://example.com/2' },
  { imagem: certificado3, texto: 'Vue', link: 'https://example.com/3' },
  { imagem: certificado4, texto: 'CSS3', link: 'https://example.com/4' },
  { imagem: certificado5, texto: 'Fundamentos React', link: 'https://example.com/5' },
];

const Carrossel = () => {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        loop={true}
       
      >
        {certificados.map((certificado, index) => (
          <SwiperSlide key={index}>
            <div className="slide-container">
              <a href={certificado.link} target="_blank" rel="noopener noreferrer">
                <img src={certificado.imagem} alt={`Certificado ${index + 1}`} />
                <div className="image-overlay">
                  <p>{certificado.texto}</p>
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carrossel;
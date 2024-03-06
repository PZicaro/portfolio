import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Carrossel.css';
import certificado1 from './imagensCertificados/certificado1.png';
import certificado2 from './imagensCertificados/certificado2.png';
import certificado3 from './imagensCertificados/certificado3.png';
import certificado4 from './imagensCertificados/certificado4.png';
import certificado5 from './imagensCertificados/certificado5.png';

import { Pagination } from 'swiper/modules'; 

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
    <Swiper pagination={true}
     modules={[Pagination]}
    navigation
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

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

import segurancaDaInformacaoPDF from '../../public/certificado-seguranca-da-informacao.pdf';
import frontendPDF from '../../public/frontend.pdf';
import vuePDF from '../../public/vue.pdf';
import css3PDF from '../../public/CSS3.pdf';
import reactPDF from '../../public/react.pdf';

const certificados = [
  { imagem: certificado1, texto: 'Segurança da informação', link: segurancaDaInformacaoPDF  },
  { imagem: certificado2, texto: 'Front-end', link: frontendPDF },
  { imagem: certificado3, texto: 'Vue', link: vuePDF },
  { imagem: certificado4, texto: 'CSS3', link: css3PDF },
  { imagem: certificado5, texto: 'Fundamentos React', link: reactPDF },
];

const Carrossel = () => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 3000 }}
      className="mySwiper"
    >
      {certificados.map((certificado, index) => (
        <SwiperSlide key={index}>
          <div className="slide-container">
            <a href={certificado.link} download >
              <img src={certificado.imagem} alt={`Certificado ${index + 1}`} />
              <div className="image-overlay">
                <p>{certificado.texto}</p>
              </div>
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carrossel;

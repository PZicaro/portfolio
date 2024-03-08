import React from 'react';
import './contato.css'
import celular from '../../public/celular.svg'
const Contato = ({image}) => {
  return (
    <>
    <div id='contact' className="container">
     
      <h1 className='title-contact'>Entre em <span className="color">Contato</span></h1>
      <p className="subtitle-contact">Se você tiver alguma dúvida ou precisar de mais informações, sinta-se à vontade para nos contatar pelo card abaixo </p>
      <p className='subtitle-contact'>ou <a href="#another-contact"><span className="color">Clique aqui</span> </a>Para outras formas de contato.</p>
      <form>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea id="mensagem" name="mensagem" rows="4" required></textarea>
        </div>
        <button type="submit" className="first-page-button">Enviar</button>
      </form>
    </div>
    <div className="container">
        <div className="another-contacts">
            <div className="another-contacts-content">
                <div id='another-contact'className="text-another-contacts">
                <h2>Contato</h2>
                <p>Me mande uma mensagem</p>

                <a href="">icaro2rodrigues@gmail.com</a>

                <div className="button-contact">

                    <a href="
                    https://wa.me/+5577988364540?text=icarowpp
                    "><button> <img src={image[5]} alt="" />Whatsapp</button></a>

                    <a href="https://www.linkedin.com/in/ícaro-rodrigues-07256820a/"><button>  <img src={image[6]} alt="" /> LinkedIn</button></a>

                    <a href="https://github.com/PZicaro"><button> <img src={image[7]} alt="" /> GitHub</button></a>
                </div>
                

                </div>
               

            <img src={celular} alt="" />

            </div>
        </div>
    </div>
    </>
  );
};

export default Contato;

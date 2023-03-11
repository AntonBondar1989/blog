import * as React from 'react';
import './Footer.css'

const Footer: React.FC = () => {

   return (
      <footer>
         {/* BOGDAN INFO */}
         <div className='footer_bogdan_box'>
            <span>Bogdan Kozhoma</span>&nbsp; &nbsp;
            <a href="https://www.linkedin.com/in/bogdan-kozhoma-79782920b/">
               <img className='logomailtel' src='/img/footer/linkedin.png' alt="logolink" />
            </a>
            <a href="https://t.me/K_Bogdan87">
               <img className='logomailtel' src='/img/footer/telegram.png' alt="logotelegram" />
            </a>
            <a href="https://drive.google.com/file/d/1CHawVrwLupSSimDAbqploLZKylHI80xY/view">
               <img className='logomailtel' src='/img/footer/folio.png' alt="logofolio" />
            </a>
         </div>
         {/* CORP */}
         <div className='footer_text'> © 2023</div>
         {/* ANTON INFO */}
         <div className='footer_anton_box'>
            <span>Anton Bondar</span>&nbsp; &nbsp;
            <a href="https://www.linkedin.com/in/anton-bondar-43054323b/">
               <img className='logomailtel' src='/img/footer/linkedin.png' alt="logolink" />
            </a>
            <a href="https://t.me/Anton_Bondar89">
               <img className='logomailtel' src='/img/footer/telegram.png' alt="logotelegram" />
            </a>
            <a href="https://anton-bondar-portfolio.netlify.app/">
               <img className='logomailtel' src='/img/footer/folio.png' alt="logofolio" />
            </a>

         </div>
      </footer>
   )
}

export default Footer;
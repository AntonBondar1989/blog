
import * as React from 'react';
import { folioIcon, linkIcon, mailIcon, telegramIcon, telIcon } from '../other/pictures';



import '../styles/Footer.css'


const Footer: React.FC = () => {

   
   return (
      <footer>
         <div>
            <a href="tel:+380962043939"><img className='logomailtel' src={telIcon} alt="logotel" /></a>
            <a href="mailto:antbond04@gmail.com"><img className='logomailtel' src={mailIcon} alt="mailtel" /></a>
         </div>
         <div className='footer_text'> © 2023 Anton Bondar</div>
         <div>
            <a href="https://www.linkedin.com/in/anton-bondar-43054323b/"><img className='logomailtel' src={linkIcon} alt="logolink" /></a>
            <a href="https://t.me/Anton_Bondar89"><img className='logomailtel' src={telegramIcon} alt="logotelegram" /></a>
            <a href="https://anton-bondar-portfolio.netlify.app/"><img className='logomailtel' src={folioIcon} alt="logofolio" /></a>
         </div>
      </footer>
   )
}

export default Footer;
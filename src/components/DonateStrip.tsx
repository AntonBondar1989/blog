import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Main.css'


const DonateStrip: React.FC = () => {

   return (
      <div className='donate_strip'>
         <span className='donate_text'>
            <Link to='/info'>
               <span className='donate_choose neon'> -CHOOSE- </span>
            </Link>&nbsp; &nbsp;
            <a href="https://send.monobank.ua/jar/5rJky3qhy9">
               <span className='donate_donate neon'> &#36;DONATE&#36; </span>
            </a>&nbsp; &nbsp;
            <a href="https://t.me/the_way_of_junior">
               <span className='donate_vote neon'> -VOTE- </span>
            </a>
         </span>
      </div>
   )
}

export default DonateStrip;
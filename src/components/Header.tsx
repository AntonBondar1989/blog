
import React, { useState } from 'react'
import { Link } from 'react-router-dom';




import '../styles/Header.css'
import MobileMenu from './MobileMenu/MobileMenu';


interface ChildProps {
   page: number;
   updatePage: any;

}

const Header: React.FC<ChildProps> = (props) => {


   const [icon, setIcon] = useState(0);


   function clicd(a: any) {
      setIcon(a)
      props.updatePage(a)

   }


   return (
      <div className="container navbar_container " style={{ paddingTop: '20px' }} >
         <div className="row navbar_row"  >
            <div className="col-sm box_logo">
            </div>
            <div className="col-sm details">
               <details >
                  <summary className="header_summary"></summary>
                  <ul className="navbar_ul">
                     <Link to='./main'>
                        <li onClick={() => clicd(1)} >
                           <button className={icon === 1 ? 'btn_header_menu_click' : 'btn_header_menu'} ><img style={{ width: '91%' }} src='/img/header/home5.png' alt="home" /></button>
                        </li>
                     </Link>
                     <Link to='./info'>
                        <li onClick={() => clicd(2)}>
                           <button className={icon === 2 ? 'btn_header_menu_click' : 'btn_header_menu'} ><img style={{ width: '91%' }} src='/img/header/battle.png' alt="battle" /></button>
                        </li>
                     </Link>
                     <Link to='./stat'>
                        <li onClick={() => clicd(3)}>
                           <button className={icon === 3 ? 'btn_header_menu_click' : 'btn_header_menu'} ><img style={{ width: '91%' }} src='/img/header/stat.png' alt="stat" /></button>
                        </li>
                     </Link>
                     <Link to='./note'>
                        <li onClick={() => clicd(4)}>
                           <button className={icon === 4 ? 'btn_header_menu_click' : 'btn_header_menu'} ><img style={{ width: '91%' }} src='/img/header/faq2.png' alt="faq" /></button>
                        </li>
                     </Link>
                  </ul>
               </details>
            </div>
         </div>
         {/* Мобильное меню */}
         <div className='mobile_menu_box'>
            <MobileMenu/>
         </div>
      </div>
   )
}

export default Header;
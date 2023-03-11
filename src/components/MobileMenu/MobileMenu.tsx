import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import './MobileMenu.css'
import { Link } from 'react-router-dom';
function MobileMenu() {
   return (
      <div style={{marginLeft: "80%"}}>
         <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState: any) => (
               <React.Fragment>
                  <Button variant="contained" {...bindTrigger(popupState)}>
                     <img src="/img/menu2.png" alt="ico" />
                  </Button>
                  <Menu className='icons' {...bindMenu(popupState)}
                     anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                  >
                     <MenuItem onClick={popupState.close}><Link to='./main'><img src="/img/header/home5.png" alt="ico" /></Link></MenuItem>
                     <MenuItem onClick={popupState.close}><Link to='./info'><img src="/img/header/battle.png" alt="ico" /></Link></MenuItem>
                     <MenuItem onClick={popupState.close}><Link to='./stat'><img src="/img/header/stat.png" alt="ico" /></Link></MenuItem>
                     <MenuItem onClick={popupState.close}><Link to='./note'><img src="/img/header/faq2.png" alt="ico" /></Link></MenuItem>
                  </Menu>
               </React.Fragment>
            )}
         </PopupState>
      </div>

   );
}

export default MobileMenu;
import React from 'react';
import {MenuContainer} from './Menu.styled';
import {ReactComponent as MenuHam} from '../../assets/svg/menu.svg'

const Menu = () => {
  return (
    <MenuContainer>
      <MenuHam/>
    </MenuContainer>
  );
}
 
export default Menu;
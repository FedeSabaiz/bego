import React from 'react';
import {HeaderContainer} from '../Header/Header.styled';
import Menu from '../../components/Menu/Menu';
import InfoDriver from '../../components/InfoDriver/InfoDriver';
import BellNotification from '../../components/BellNotification/BellNotification';

const Header = () => {
  return (
    <HeaderContainer>
      <Menu/>
      <InfoDriver/>
      <BellNotification/>
    </HeaderContainer>
  );
}
 
export default Header;
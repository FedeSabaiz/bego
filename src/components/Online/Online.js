import React from 'react';
import {OnlineContainer} from './Online.styled';
import {ReactComponent as Sun} from '../../assets/svg/sun.svg';

const Online = () => {
  return (
    <OnlineContainer>
      <Sun/>
      <p>ONLINE</p>
    </OnlineContainer>
  );
}
 
export default Online;
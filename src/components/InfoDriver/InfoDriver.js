import React from 'react';
import {DriverContainer, TextDriver} from './InfoDriver.styled';
import {ReactComponent as User} from '.././../assets/svg/profile.svg';

const InfoDriver = () => {
  return (
    <DriverContainer>
      <User className="profile"/>
      <TextDriver>
        <p className="price"><span className="coin">$</span>230.90</p>
        <p className="points">40 Points</p>
      </TextDriver>
    </DriverContainer>
  );
}
 
export default InfoDriver;
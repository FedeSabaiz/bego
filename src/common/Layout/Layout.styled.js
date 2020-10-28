import styled from 'styled-components';
import image from '../../assets/img/street.png';

export const LayoutContainer = styled.div`
  width: 381px;
  height: 100vh;
  background: url(${image});
  display: flex;
  flex-direction: column;
  align-items: center;
`;
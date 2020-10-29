import styled from 'styled-components';
import image from '../../assets/img/street.png';

export const LayoutContainer = styled.div`
  width: 100%;
  height: 813px;
  background: url(${image});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
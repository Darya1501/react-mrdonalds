import styled from 'styled-components';

export const ButtonCheckout = styled.button`
  display: block;
  margin: 0 auto;
  padding: 20px 80px;
  font-size: 20px;
  background-color: #299B01;
  color: #fff;
  border-color: transparent;
  transition-property: color, background-color, border-color;
  transition-duration: 0.3s;
  &:hover {
    background-color: #fff;
    color: #299B01;
    border-color: #299B01;
  }
  &:disabled {
    background-color: #bbb;
    color: #fff;
    border-color: #bbb;
  }
`;
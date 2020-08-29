import styled from 'styled-components';
import { darken } from 'polished';

const Button = styled.button`
  position: relative;
  padding: 0;
  background-color: ${({ activeColor }) => darken(0.2, `${activeColor}`)};
  cursor: pointer;
  width: 200px;
  height: 60px;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-transform: uppercase;
  transition: 0.2s all;
  top: 0;
  &:hover {
    background-color: ${({ activeColor }) => darken(0.3, `${activeColor}`)};
    top: 5px;
  }

  &:focus {
    outline: none;
  }
`;

export default Button;

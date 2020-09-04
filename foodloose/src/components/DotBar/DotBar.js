import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const BarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const DotButton = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid black;
`;

const DotBar = () => (
  <BarWrapper>
    <DotButton exact as={NavLink} to="/F" />
    <DotButton exact as={NavLink} to="/P" />
  </BarWrapper>
);

export default DotBar;

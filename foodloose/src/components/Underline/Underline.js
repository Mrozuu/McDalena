import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import headIcon from 'assets/icons/head.svg';
import mixerIcon from 'assets/icons/mixer.svg';

const StyledSpan = styled.span`
  width: ${({ width }) => width}px;
  height: 2px;
  background-color: ${({ theme }) => theme.grey200};
`;

const UnderlineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled.img`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  margin: 0 10px;
`;

function Underline({ width, size, second }) {
  return (
    <UnderlineWrapper>
      <StyledSpan width={width} />
      <StyledIcon src={second ? mixerIcon : headIcon} size={size} />
      <StyledSpan width={width} />
    </UnderlineWrapper>
  );
}

Underline.propTypes = {
  width: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  second: PropTypes.bool,
};

Underline.defaultProps = {
  second: false,
};

export default Underline;

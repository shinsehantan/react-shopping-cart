import React from 'react';
import { css } from 'styled-components';

import Flex from './utils/Flex';
import IconButton from './utils/IconButton';

import upperIcon from '../asset/up-icon.png';
import downIcon from '../asset/down-icon.png';

const CounterButtonWrapperStyle = css`
  width: 114px;
  height: 60px;
  margin: 25px 0;
`;

const CounterScreenStyle = css`
  width: 71px;
  height: 58px;
  border: 1px solid #dddddd;
  font-size: 24px;
`;

const IconButtonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dddddd;
  border-left: none;
`;

const CounterButton = ({ count, onIncreaseButtonClick, onDecreaseButtonClick }) => {
  return (
    <Flex alignItems="center" css={CounterButtonWrapperStyle}>
      <Flex justifyContent="center" alignItems="center" css={CounterScreenStyle}>
        {count}
      </Flex>

      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <IconButton
          src={upperIcon}
          alt="카운터 증가 버튼"
          width="40px"
          height="30px"
          css={IconButtonStyle}
          onClick={onIncreaseButtonClick}
        />
        <IconButton
          src={downIcon}
          alt="카운터 감소 버튼"
          width="40px"
          height="30px"
          css={IconButtonStyle}
          onClick={onDecreaseButtonClick}
        />
      </Flex>
    </Flex>
  );
};

export default CounterButton;

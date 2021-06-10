import React from 'react';
import styled, { css } from 'styled-components';

import Flex from '../components/utils/Flex';

import { COLOR, LOADING_MESSAGE } from '../constant';

const ContentWrapper = styled.section`
  margin: 25px;
  text-align: center;
`;

const ContentText = styled.p`
  font-size: 40px;
  line-height: 50px;
  color: ${COLOR.CYAN[400]};
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

const FlexStyle = css`
  width: 100%;
  height: 80vh;
`;

function NotFoundPage() {
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column" css={FlexStyle}>
      <ContentWrapper>
        <ContentText>{LOADING_MESSAGE.LOADING}</ContentText>
      </ContentWrapper>
    </Flex>
  );
}

export default NotFoundPage;

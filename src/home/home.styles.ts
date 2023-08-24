import styled from '@emotion/styled';

export const RootWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: sans-serif;
  background-color: #F5FEF680;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const ContentBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
  padding-top: 20px;
  width: 100%;
  height: calc(100% - 230px);
`;



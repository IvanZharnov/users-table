import styled, { keyframes } from 'styled-components';

const transition = keyframes`
  from {top: -200px; opacity: 0;}
  to {top: 0; opacity: 1;}
`;

export const ModalWindow = styled.div`
  position: fixed;
  padding-top: 15em;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-image: linear-gradient(135deg, #3b41c5 0%, #a981bb 100%);
  margin: auto;
  padding: 0;
  border-radius: 10px;
  width: 20%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  -webkit-animation-name: ${transition};
  -webkit-animation-duration: 0.5s;
  animation-name: ${transition};
  animation-duration: 0.5s
`;

export const ModalHeader = styled.span`
  color: #fff;
  font-size: 30px;
  padding: 20px;
  border-bottom: 1px solid #ffffff69;
`;

export const ModalMain = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 20px 20px;
`;

export const ModalMainText = styled.span`
  color: #fff;
  font-size: 16px;
  margin: 20px 0 10px 0;
`;

export const ModalMainInput = styled.input`
  color: #000;
  border: none;
  border-radius: 3px;
  height: 25px;
  font-size: 17px;
  outline: none;
  padding-left: 8px;
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  border-top: 1px solid #ffffff69;
`;

export const ModalFooterButton = styled.button`
  height: 30px;
  width: 90px;
  background: none;
  border: none;
  border-radius: 3px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  outline: none;
  box-shadow: 0px 2px 5px #4b4b4b, inset 0px 2px 2px #e2e2e2;
  &:hover {
    color: #d9d9d9;
  }
  &:active {
    box-shadow: 0px 1px 2px #4b4b4b, inset 0px 1px 1px #e2e2e2;
  }
`;

import styled, { keyframes } from 'styled-components';

const transition = keyframes`
  from {top: -300px; opacity: 0;}
  to {top: 0; opacity: 1;}
`;

export const ModalWindow = styled.div`
  position: fixed;
  padding-top: 5em;
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
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 50%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  -webkit-animation-name: ${transition};
  -webkit-animation-duration: 0.4s;
  animation-name: ${transition};
  animation-duration: 0.4s
`;

export const ModalHeader = styled.div`
  padding: 2px 16px;
  background-color: #b4e2b4;
  color: white;
`;

export const ModalBody = styled.div`
  padding: 2px 16px;
`;


export const ModalFooter = styled.div`
  padding: 2px 16px;
  background-color: #b4e2b4;
  color: white;
`;

export const Close = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 25%;
  font-family: 'Open Sans', sans-serif;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
`;

export const ReloadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 15%;
  background: #f7f7f7;
  border: none;
  border-radius: 8px;
  color: #808080;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  box-shadow: 0px 2px 5px #9d9d9d, inset 0px 2px 2px #ffffff;
  &:hover {
    color: #2246eb;
  }
  &:active {
    box-shadow: 0px 1px 2px #9d9d9d, inset 0px 1px 1px #ffffff;
  }
`;

export const Title = styled.article`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 60%;
  background: #f7f7f7;
  border: none;
  border-radius: 8px;
  color: #6f60c0;
  text-transform: uppercase;
  outline: none;
  box-shadow: 0px 2px 6px #9d9d9d, inset 0px 2px 2px #ffffff;
`;

export const CreateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 15%;
  background: #f7f7f7;
  border: none;
  border-radius: 8px;
  color: #808080;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  box-shadow: 0px 2px 6px #9d9d9d, inset 0px 2px 2px #ffffff;
  &:hover {
    color: #00a70b;
  }
  &:active {
    box-shadow: 0px 1px 2px #9d9d9d, inset 0px 1px 1px #ffffff;
  }
`;

export const Table = styled.article`
  display: grid;
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 1px 10px #9d9d9d;
`;

export const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr repeat(4, 2fr);
  align-items: center;
  justify-items: center;
  background-image: linear-gradient(135deg, #3b41c5 0%, #a981bb 100%);
  width: 100%;
  height: 50px;
  font-size: 15px;
  text-transform: uppercase;
  color: #fff;
`;

export const Main = styled.main`
  background: #fafafa;
`;

export const MainRow = styled.section`
  display: grid;
  grid-template-columns: 1fr repeat(4, 2fr);
  justify-items: center;
  align-items: center;
  height: 50px;
  font-size: 14px;
  color: #808080;
  border-bottom: 1px solid #dfdfdf;
`;

export const UpdateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  width: 80px;
  background: #f7f7f7;
  border: none;
  border-radius: 5px;
  color: #808080;
  cursor: pointer;
  outline: none;
  box-shadow: 0px 2px 5px #9d9d9d, inset 0px 2px 2px #ffffff;
  &:hover {
    color: #2246eb;
  }
  &:active {
    box-shadow: 0px 1px 2px #9d9d9d, inset 0px 1px 1px #ffffff;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  width: 80px;
  background: none;
  border: none;
  border-radius: 5px;
  color: #808080;
  cursor: pointer;
  outline: none;
  box-shadow: 0px 2px 5px #9d9d9d, inset 0px 2px 2px #ffffff;
  &:hover {
    color: #d40000;
  }
  &:active {
    box-shadow: 0px 1px 2px #9d9d9d, inset 0px 1px 1px #ffffff;
  }
`;

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
  width: 115px;
  background: none;
  border: 1px solid #2246eb;
  border-radius: 8px;
  color: #2246eb;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
`;

export const Title = styled.article`
  color: #2246eb;
  font-size: 30px;
`;

export const CreateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 115px;
  background: none;
  border: 1px solid #279c2f;
  border-radius: 8px;
  color: #279c2f;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
`;

export const Table = styled.article`
  display: grid;
  height: 100%;
  width: 100%;
  border: 1px solid #667eea;
  border-radius: 10px;
  overflow: hidden;
`;

export const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr repeat(4, 2fr);
  align-items: center;
  justify-items: center;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  width: 100%;
  height: 50px;
  font-size: 15px;
  text-transform: uppercase;
  color: #fff;
`;

export const Main = styled.main`
  background-image: linear-gradient(135deg, #f2f5ff 0%, #f7f4ff 100%);
`;

export const MainRow = styled.section`
  display: grid;
  grid-template-columns: 1fr repeat(4, 2fr);
  justify-items: center;
  align-items: center;
  height: 50px;
  font-size: 14px;
  color: #2246eb;
`;

export const UpdateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  width: 80px;
  background: none;
  border: 1px solid #2246eb;
  border-radius: 5px;
  color: #2246eb;
  cursor: pointer;
  outline: none;
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  width: 80px;
  background: none;
  border: 1px solid #d40000;
  border-radius: 5px;
  color: #d40000;
  cursor: pointer;
  outline: none;
`;

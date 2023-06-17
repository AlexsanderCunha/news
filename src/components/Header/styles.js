import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: space-between;
  background-color: #000000; 
  box-shadow: 0 0 20px 3px;

  > svg {
    position: static;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;
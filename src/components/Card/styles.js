import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: calc(33.33% - 20px);
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 0 0 10px 2px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 9px;
  background-color: #fff;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardTitle = styled.h2`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const CardDescription = styled.p`
  margin-top: 5px;
  font-size: 14px;
  margin-bottom: 16px;
`;

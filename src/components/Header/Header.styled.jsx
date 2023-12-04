import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;

  &:hover {
    color: white;
  }
`;

export const HeaderList = styled.ul`
  list-style: none;
  display: flex;
`;

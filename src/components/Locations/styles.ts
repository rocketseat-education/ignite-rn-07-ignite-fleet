import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const Line = styled.View`
  height: 64px;
  width: 1px;
  margin: -2px;
  margin-left: 23px;
  border-width: 1px;
  border-left-color: ${({ theme }) => theme.COLORS.GRAY_400};
`
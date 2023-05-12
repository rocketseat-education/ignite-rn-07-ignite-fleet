import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 56px;
  width: 56px;
  border-radius: 6px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;
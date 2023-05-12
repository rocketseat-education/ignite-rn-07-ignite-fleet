import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  margin: 32px 0;
  padding: 22px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  flex-direction: row;
  align-items: center;
`;

export const IconBox = styled.View`
  width: 77px;
  height: 77px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  margin-right: 12px;

  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

  flex: 1;
  text-align: justify;
  textAlignVertical: center;
`;

export const TextHighlight = styled.Text`
  color: ${({ theme }) => theme.COLORS.BRAND_LIGHT};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
import { useTheme } from 'styled-components/native';
import { IconProps } from 'phosphor-react-native';

import { Container, Title } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type IconBoxProps = (props: IconProps) => JSX.Element;


type Props = {
  icon?: IconBoxProps;
  title: string;
}

export function TopMessage({ title, icon: Icon }: Props) {
  const { COLORS } = useTheme();
  const insets = useSafeAreaInsets();
  
  const paddingTop = insets.top + 5;

  return (
    <Container style={{ paddingTop }}>
      {
        Icon &&
        <Icon 
          size={12}
          color={COLORS.GRAY_100}
        />
      }

      <Title>{title}</Title>
    </Container>
  );
}
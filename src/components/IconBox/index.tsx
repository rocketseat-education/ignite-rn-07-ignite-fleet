import { useTheme } from 'styled-components';
import { IconProps } from 'phosphor-react-native';

import { Container, SizeProps } from './styles';

export type IconBoxProps = (props: IconProps) => JSX.Element;

type Props = {
  size?: SizeProps;
  icon: IconBoxProps
}

export function IconBox({ icon: Icon, size = 'NORMAL' }: Props) {
  const iconSize = size === 'NORMAL' ? 24 : 16

  const { COLORS } = useTheme()

  return (
    <Container size={size}>
      <Icon size={iconSize} color={COLORS.BRAND_LIGHT} />
    </Container>
  );
}
import { useRoute } from '@react-navigation/native';

import { Container } from './styles';

type RouteParamProps = {
  id: string;
}

export function Arrival() {

  const route = useRoute();

  const { id } = route.params as RouteParamProps;


  console.log(id);

  return (
    <Container>

    </Container>
  );
}
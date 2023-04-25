import { TouchableOpacity } from 'react-native'
import { Power } from 'phosphor-react-native'

import { useUser } from '@realm/react';

import { Container, Greeting, Message, Name, Picture } from './styles';

import theme from '../../theme';

export function HomeHeader() {
  const user = useUser();

  return (
    <Container>
      <Picture 
        source={{ uri: user?.profile.pictureUrl }}
        placeholder='L184i9ofbHof00ayjsay~qj[ayj@'
      />
      <Greeting>
        <Message>
          Olá
        </Message>

        <Name>
          {user?.profile.name}
        </Name>
      </Greeting>

      <TouchableOpacity>
        <Power size={32} color={theme.COLORS.GRAY_400} />
      </TouchableOpacity>
    </Container>
  );
}
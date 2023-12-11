import { useState } from 'react';
import { Container, Title, Slogan } from './styles';
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { Realm, useApp } from '@realm/react'

import backgroundImg from '../../assets/background.png'
import { Button } from '../../components/Button';

import { WEB_CLIENT_ID, IOS_CLIENT_ID } from '@env'
import { Alert } from 'react-native';

GoogleSignin.configure({
  scopes: ['email', 'profile'],
  webClientId: WEB_CLIENT_ID,
  iosClientId: IOS_CLIENT_ID
})

export function SignIn() {
  const [isAutenticating, setIsAuthenticanting] = useState(false)
  const app = useApp()

  async function handleGoogleSignIn() {
    try {
      setIsAuthenticanting(true)

      const { idToken } = await GoogleSignin.signIn()
      
      if(idToken) {
        const credentials = Realm.Credentials.jwt(idToken)

        await app.logIn(credentials)
      } else {
        Alert.alert('Entrar', "Não foi possível conectar-se a sua conta google.")
        setIsAuthenticanting(false)  
      }

    } catch (error) {
      console.log(error)
      Alert.alert('Entrar', "Não foi possível conectar-se a sua conta google.")
      setIsAuthenticanting(false)
    }
  }

  return (
    <Container source={backgroundImg}>
      <Title>Ignite Fleet</Title>

      <Slogan>
        Gestão de uso de veículos
      </Slogan>

      <Button title='Entrar com Google' onPress={handleGoogleSignIn} isLoading={isAutenticating} />
    </Container>
  );
}
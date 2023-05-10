import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { LicensePlateInput } from '../../components/LicensePlateInput';
import { TextAreaInput } from '../../components/TextAreaInput';

import { Container, Content } from './styles';

export function Departure() {
  return (
    <Container>
      <Header title='Saída' />

      <Content>
        <LicensePlateInput 
          label='Placa do veículo' 
          placeholder="BRA1234"
        />

        <TextAreaInput 
          label='Finalizade'
          placeholder='Vou utilizar o veículo para...'
        />

        <Button 
          title='Registar Saída'
        />
      </Content>
    </Container>
  );
}
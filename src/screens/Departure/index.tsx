import { Header } from '../../components/Header';
import { LicensePlateInput } from '../../components/LicensePlateInput';
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
      </Content>
    </Container>
  );
}
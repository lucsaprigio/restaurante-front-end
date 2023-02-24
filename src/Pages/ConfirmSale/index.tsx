import { useState } from 'react';
import { ConfirmCards } from '../../components/ConfirmCards';
import {
  Container,
  Header,
  Title,
  Text,
  Content,
} from './styles';

export function ConfirmSale() {
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [editInput, setEditInput] = useState(false);

  async function handleEditInput() {
    setEditInput(editInput => !editInput)
  }

  return (
    <Container>
      <Header>
        <Title>Confirmar Pedido</Title>
        <Text>Verifique os itens do seu pedido abaixo</Text>
      </Header>
      <Content>
        <ConfirmCards
          description={description}
          price={price}
          disabled={editInput}
          onChange={e => e.target.value}
        />
      </Content>
    </Container>
  );
}
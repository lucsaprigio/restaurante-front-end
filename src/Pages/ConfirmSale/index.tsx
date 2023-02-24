import { useState, useEffect } from 'react';
import { ConfirmCards } from '../../components/ConfirmCards';
import { ProductsProps } from '../../DTOs/ProductDTO';

import {
  Container,
  Header,
  Title,
  Text,
  Wrapper,
  Content,
} from './styles';
import { useParams } from 'react-router-dom';
import { useSaleLaunch } from '../../context/saleProvider';

export function ConfirmSale() {
  const { addLaunch, removeLaunch } = useSaleLaunch();
  const params = useParams();

  const [cards, setCards] = useState<ProductsProps[]>([]);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [total, setTotal] = useState();
  const [editInput, setEditInput] = useState(false);

  try {

  } catch (error) {
    console.log(error)
  }

  async function loadItens() {
    const storagedSale = localStorage.getItem("@Sale:user");
    const storagedTotal = localStorage.getItem("@Total:user");

    setCards(JSON.parse(storagedSale));
    setTotal(JSON.parse(storagedTotal));
  }

  // Função do Provider de adicionar itens ao pedido/carrinho
  async function addItem({ ID_PRODUTO, DESCRICAO, VALOR_UNITARIO, CD_CATEGORIA, QUANTIDADE, VALOR_TOTAL }: ProductsProps) {
    let data = {
      ID_PRODUTO,
      DESCRICAO,
      VALOR_UNITARIO,
      CD_CATEGORIA,
      QUANTIDADE: +1,
      VALOR_TOTAL
    }

    addLaunch({ ...data });
  }


  // Função do Provider de remover itens ao pedido/carrinho
  async function removeItem({ ID_PRODUTO, DESCRICAO, VALOR_UNITARIO, CD_CATEGORIA, QUANTIDADE, VALOR_TOTAL }: ProductsProps) {
    const sumQuantity = +1;

    let data = {
      ID_PRODUTO,
      DESCRICAO,
      VALOR_UNITARIO,
      CD_CATEGORIA,
      QUANTIDADE: sumQuantity,
      VALOR_TOTAL
    }

    removeLaunch({ ...data })
  }


  useEffect(() => {
    setInterval(() => {
      loadItens();
    }, 200)
  }, [])

  return (
    <Container>
      <Header>
        <Title>Confirmar Pedido</Title>
        <h3>Mesa {params.id}</h3>
        <Text>Verifique os itens do seu pedido abaixo</Text>
      </Header>
      <Wrapper>
        {
          cards.length > 0 ? (
            <Content>
              {
                cards.map((card) => (
                  <ConfirmCards
                    description={!editInput ? card.DESCRICAO : description}
                    price={card.VALOR_UNITARIO.toString()}
                    quantity={card.QUANTIDADE.toString()}
                    total={card.VALOR_TOTAL.toString()}
                    disabled={editInput}
                    add={() => addItem({ ...card })}
                    remove={() => removeItem({ ...card })}
                  />
                ))
              }
            </Content>
          ) : (
            <h3>Não há itens a serem fechados nessa Mesa !</h3>
          )
        }
      </Wrapper>
    </Container>
  );
}
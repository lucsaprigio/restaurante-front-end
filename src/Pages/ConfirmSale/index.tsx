import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSaleLaunch } from '../../context/saleProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { IoMdCheckmark } from 'react-icons/io';

import { ConfirmCards } from '../../components/ConfirmCards';
import { ProductsProps } from '../../DTOs/ProductDTO';

import {
  Container,
  Header,
  Title,
  Text,
  Wrapper,
  Content,
  Confirm,
  FooterConfirm,
  TotalPrice,
  WrapperConditional,
  GoSaleButton,
} from './styles';
import { api } from '../../services/api';

export function ConfirmSale() {
  const { addLaunch, removeLaunch, removeTotalItens } = useSaleLaunch();
  const params = useParams();
  const navigate = useNavigate();

  const [cards, setCards] = useState<ProductsProps[]>([]);
  const [totalProduct, setTotalProduct] = useState();
  const [editInput, setEditInput] = useState(false);

  async function loadItens() {
    const storagedSale = localStorage.getItem("@Sale:user");
    const storagedTotal = localStorage.getItem("@Total:user");

    setCards(JSON.parse(storagedSale));
    setTotalProduct(JSON.parse(storagedTotal));
  }

  async function handleConfirmSale() {
    const data = {
      consumer: {
        id: 999,
        name: 'Sem nome',
        phone: 999999999
      },
      launchs: cards,
      totalProduct: Number(totalProduct)
    }

    const response = await api.post(`/new-table-order/${params.id}`, data);

    if (response.data.error) {
      console.log(response.data.error)
    }

    toast.success(`Pedido realizado na mesa ${params.id}`);


    let item = []

    localStorage.setItem("@Sale:user", JSON.stringify(item));
    localStorage.setItem("@Total:user", JSON.stringify(item));

    setTimeout(() => {
      navigate('/')
    }, 5000)
  }

  async function handleGoToNewSale() {
    navigate(`/new-sale/${params.id}`)
  }

  // Função do Provider de adicionar itens ao pedido/carrinho
  async function addItem({ ID_PRODUTO, DESCRICAO_PRODUTO, UNITARIO_PRODUTO, CD_CATEGORIA, QUANTIDADE_PRODUTO, TOTAL_PRODUTO }: ProductsProps) {
    let data = {
      ID_PRODUTO,
      DESCRICAO_PRODUTO,
      UNITARIO_PRODUTO,
      CD_CATEGORIA,
      QUANTIDADE_PRODUTO: +1,
      TOTAL_PRODUTO
    }

    addLaunch({ ...data });
  }


  // Função do Provider de remover itens ao pedido/carrinho
  async function removeItem({ ID_PRODUTO, DESCRICAO_PRODUTO, UNITARIO_PRODUTO, CD_CATEGORIA, QUANTIDADE_PRODUTO, TOTAL_PRODUTO }: ProductsProps) {
    const sumQuantity = +1;

    let data = {
      ID_PRODUTO,
      DESCRICAO_PRODUTO,
      UNITARIO_PRODUTO,
      CD_CATEGORIA,
      QUANTIDADE_PRODUTO: sumQuantity,
      TOTAL_PRODUTO
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
                    key="index"
                    description={!editInput ? card.DESCRICAO_PRODUTO : card.DESCRICAO_PRODUTO}
                    price={card.UNITARIO_PRODUTO.toString()}
                    quantity={card.QUANTIDADE_PRODUTO.toString()}
                    total={card.TOTAL_PRODUTO.toString()}
                    disabled={editInput}
                    add={() => addItem({ ...card })}
                    remove={() => removeItem({ ...card })}
                    removeItem={() => removeTotalItens({ ...card })}
                  />
                ))
              }
              <FooterConfirm>
                <TotalPrice><span>Total: R${totalProduct}</span></TotalPrice>
                <Confirm onClick={handleConfirmSale}> Confirmar pedido <IoMdCheckmark style={{ color: '#FFFFFF' }} size={18} /></Confirm>
              </FooterConfirm>
            </Content>
          ) : (
            <WrapperConditional>
              <h3>Não há itens a serem fechados nessa Mesa !</h3>
              <GoSaleButton onClick={handleGoToNewSale}>Ir para fazer o Pedido agora!</GoSaleButton>
            </WrapperConditional>
          )
        }
      </Wrapper >
      <ToastContainer />
    </Container >
  );
}
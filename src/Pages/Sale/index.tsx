import { useState, useEffect, FormEvent } from 'react';
import { useParams } from 'react-router-dom';

import {
  Container,
  Content,
  Header,
  Title,
  UpdateContainer,
  AddButton,
  Sales,
  SaleFooter,
} from './styles';
import { api } from '../../services/api';
import { ConfirmCards } from '../../components/ConfirmCards';
import { ConfirmedCards } from '../../components/ConfirmedCards';
import { Confirm } from '../ConfirmSale/styles';

export interface Sale {
  ID: number;
  NUM_PEDIDO: number;
  CD_MESA: number;
  ID_CLIENTE: number;
  NOME_CLIENTE?: string;
  TOTAL_PEDIDO: number;
  FECHADO: string;
  PED_MESA: number;
  ID_PRODUTO: number;
  DESCRICAO_PRODUTO: string;
  UNITARIO_PRODUTO: number;
  DESCONTO_PRODUTO: number;
  TOTAL_PRODUTO: number;
  QUANTIDADE_PRODUTO: number;
}

interface InputListProps {
  description: string;
  quantity: string;
  price: string;
  totalPrice?: string;
}

export function Sale() {
  const { id } = useParams();
  const [sales, setSales] = useState<Sale[]>([]);
  const [editSale, setEditSale] = useState<InputListProps[]>([]);
  const [description, setDescription] = useState('');
  const [total, setTotal] = useState<number>(0);

  async function listSales() {
    const response = await api.get(`/list-table-order/${id}`)

    // Soma dos produtos
    let totalProduct = 0;
    let sumProduct = 0;
    for (let i = 0; i < response.data.length; i++) {
      sumProduct += response.data[i].TOTAL_PRODUTO
      totalProduct = sumProduct
    }

    setSales(response.data);
    setTotal(totalProduct);
  }

  async function handleAddItem(e: FormEvent) {
    e.preventDefault();

    const list = [...editSale];

    const data = {
      description: "",
      price: "",
      quantity: "",
    }

    list.push({ ...data })

    setEditSale(list);
    console.log(editSale)
  }

  async function handleEditItemIndex(e: any, index: number) {
    editSale[index] = e.target.value;
    setEditSale([...editSale])
  }

  useEffect(() => {
    listSales();
  }, [])

  return (
    <Container>
      <Content>
        <Header>
          <Title>Mesa {id}</Title>
        </Header>
        {
          sales.map((sale) => (
            <Sales key={sale.ID}>
              <div>
                <ConfirmedCards
                  description={sale.DESCRICAO_PRODUTO}
                  price={sale.UNITARIO_PRODUTO.toFixed(2)}
                  quantity={sale.QUANTIDADE_PRODUTO.toString()}
                  total={sale.TOTAL_PRODUTO.toFixed(2)}
                  disabled={false}
                />
              </div>
            </Sales>
          ))
        }
        <UpdateContainer>
          {
            editSale.map((sale, index) => (
              <>
                <ConfirmCards
                  description={sale.description}
                  onChangeDescription={e => handleEditItemIndex(e, index)}
                  price={sale.price}
                  onChangePrice={e => handleEditItemIndex(e, index)}
                  quantity={sale.quantity}
                  onChangeQuantity={e => handleEditItemIndex(e, index)}
                  total={sale.totalPrice}
                  onChangeTotal={e => handleEditItemIndex(e, index)}
                  disabled={false}
                />
              </>
            ))
          }
          <AddButton onClick={handleAddItem}>Adcionar</AddButton>
        </UpdateContainer>
        <SaleFooter>
          <strong>
            Valor Total
          </strong>
          <strong>
            R$ {total}
          </strong>
        </SaleFooter>
      </Content>
    </Container>
  );
}
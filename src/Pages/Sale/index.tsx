import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  Container,
  Content,
  Header,
  Title,
  Sales,
  SaleFooter,
} from './styles';
import { api } from '../../services/api';

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

export function Sale() {
  const { id } = useParams();
  const [sales, setSales] = useState<Sale[]>([]);
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
                <span className="description">
                  {sale.DESCRICAO_PRODUTO}
                </span>
              </div>

              <div>
                <span className="price">
                  Valor: R$ {sale.UNITARIO_PRODUTO}
                </span>

                <span className="quantity">
                  Qtd: {sale.QUANTIDADE_PRODUTO}
                </span>
                <span className="totalPrice">
                  Total: R$ {sale.TOTAL_PRODUTO}
                </span>
              </div>
            </Sales>
          ))
        }
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
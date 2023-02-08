import { useEffect, useState } from 'react';
import { useSaleLaunch } from '../../context/saleProvider';

import { Cards } from '../../components/Cards';
import { ProductsProps } from '../../DTOs/ProductDTO';
import Hamburguer from '../../assets/hamburguer.png';
import Refrigerante from '../../assets/refrigerante.png';

import {
  Container,
  Header,
  Content,
} from './styles';
import { api } from '../../services/api';

export function NewSale() {
  const { addLaunch } = useSaleLaunch();

  const [products, setProducts] = useState<ProductsProps[]>([]);

  async function addItem({ ID_PRODUTO, DESCRICAO, VALOR_UNITARIO, CD_CATEGORIA }: ProductsProps) {
    const sumQuantity = 1;

    let data = {
      ID_PRODUTO,
      DESCRICAO,
      VALOR_UNITARIO,
      CD_CATEGORIA,
      QUANTIDADE: sumQuantity
    }

    addLaunch({ ...data })
  }

  async function listProducts() {
    const response = await api.get('/list-products');

    console.log(response.data);
    setProducts(response.data);
  }

  useEffect(() => {
    listProducts();
  }, []);

  return (
    <Container>
      <Header>
        <strong>Novo Pedido</strong>
        <span>Selecione os produtos para realizar o pedido</span>
      </Header>
      <Content>
        {
          products.map((product) => (
            <button onClick={() => addItem({ ...product })}>
              <Cards
                key={product.ID_PRODUTO}
                description={product.DESCRICAO}
                price={product.VALOR_UNITARIO.toFixed(2)}
                promotionPrice={product.VALOR_UNITARIO.toFixed(2)}
                information='loren ipsun korsen'
                src={product.CD_CATEGORIA === 1 ? Hamburguer : Refrigerante}
              />
            </button>
          ))
        }
      </Content>
    </Container >
  );
}
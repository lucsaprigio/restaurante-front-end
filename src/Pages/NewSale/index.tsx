import { useEffect, useState } from 'react';
import { useSaleLaunch } from '../../context/saleProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
import { useParams } from 'react-router-dom';

export function NewSale() {
  const { addLaunch } = useSaleLaunch();
  const { id } = useParams();


  const [products, setProducts] = useState<ProductsProps[]>([]);

  async function addItem({ CD_MESA, ID_PRODUTO, DESCRICAO, VALOR_UNITARIO, CD_CATEGORIA, VALOR_TOTAL }: ProductsProps) {
    const sumQuantity = 1;

    let data = {
      CD_MESA: Number(id),
      ID_PRODUTO,
      DESCRICAO,
      VALOR_UNITARIO,
      CD_CATEGORIA,
      QUANTIDADE: sumQuantity,
      VALOR_TOTAL: VALOR_UNITARIO
    }

    addLaunch({ ...data });

    toast.success(`${data.DESCRICAO} foi adicionado ao pedido!`, {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  }

  async function listProducts() {
    const response = await api.get('/list-products');

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
            <Cards
              key={product.ID_PRODUTO}
              description={product.DESCRICAO}
              price={product.VALOR_UNITARIO.toFixed(2)}
              promotionPrice={product.VALOR_UNITARIO.toFixed(2)}
              information='loren ipsun korsen'
              src={product.CD_CATEGORIA === 1 ? Hamburguer : Refrigerante}
              add={() => addItem({ ...product })}
            />
          ))
        }
      </Content>
      <ToastContainer />
    </Container>
  );
}
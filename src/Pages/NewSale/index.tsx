import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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

import { Table } from '../Home';

export function NewSale() {
  const { addLaunch } = useSaleLaunch();
  const { id } = useParams();
  const navigate = useNavigate();


  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [listSale, setListSale] = useState<Table[]>([]);

  async function tableStatus() {
    const response = await api.get(`/check-table/${id}`);

    setListSale(response.data);

    const index = listSale.map(index => index.OCUPADA);

    if (index[0] === 'S') {
      toast.info(`Mesa ${id} está ocupada 🚫`);

      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }

  async function addItem({ ID_PRODUTO, DESCRICAO_PRODUTO, QUANTIDADE_PRODUTO, UNITARIO_PRODUTO, CD_CATEGORIA, TOTAL_PRODUTO }: ProductsProps) {
    const sumQuantity = 1;

    let data = {
      CD_MESA: Number(id),
      ID_PRODUTO,
      DESCRICAO_PRODUTO,
      UNITARIO_PRODUTO,
      CD_CATEGORIA,
      QUANTIDADE_PRODUTO: sumQuantity,
      TOTAL_PRODUTO: UNITARIO_PRODUTO
    }

    addLaunch({ ...data });

    toast.success(`${data.DESCRICAO_PRODUTO} foi adicionado ao pedido!`, {
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
    tableStatus();
  }, [listSale]);

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
              description={product.DESCRICAO_PRODUTO}
              price={product.UNITARIO_PRODUTO.toFixed(2)}
              promotionPrice={product.UNITARIO_PRODUTO.toFixed(2)}
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
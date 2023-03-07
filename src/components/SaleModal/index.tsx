import { useState, useEffect } from 'react';
import Modal from 'react-modal'
import { api } from '../../services/api';
import { Container, Content } from './styles';

import { IoMdClose } from 'react-icons/io';
import { CardsSearch } from '../CardsSearch';
import { ProductsProps } from '../../DTOs/ProductDTO';

import Hamburguer from '../../assets/hamburguer.png';
import Refrigerante from '../../assets/refrigerante.png';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function SaleModal({ isOpen, onRequestClose }: ModalProps) {
  const [products, setProducts] = useState<ProductsProps[]>([]);

  async function loadCards() {
    const response = await api.get('/list-products');

    setProducts(response.data);
  }
  useEffect(() => {
    loadCards();
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <IoMdClose size={24} />
      </button>
      <Container>
        <h2>Pesquisar</h2>
        <input />
        <Content>
          {
            products.map((product, index) => (
              <CardsSearch
                key={index}
                description={product.DESCRICAO_PRODUTO}
                information={product.DESCRICAO_PRODUTO}
                price={product.UNITARIO_PRODUTO.toFixed(2)}
                promotionPrice={product.UNITARIO_PRODUTO}
                src={product.CD_CATEGORIA === 1 ? Hamburguer : Refrigerante}
              />
            ))
          }
        </Content>
      </Container>
    </Modal>
  );
}
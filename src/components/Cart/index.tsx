import { useEffect, useState } from 'react';

import { useSaleLaunch } from '../../context/saleProvider';
import { ProductsProps } from '../../DTOs/ProductDTO';

import { SaleCard } from '../SaleCard';
import { Container } from './styles';

import Hamburguer from '../../assets/hamburguer.png';
import Refrigerante from '../../assets/refrigerante.png';

export function Cart() {
  const { addLaunch, removeLaunch } = useSaleLaunch();

  const [cards, setCards] = useState<ProductsProps[]>([]);
  const [total, setTotal] = useState([]);

  async function loadCards() {
    const storagedSale = localStorage.getItem("@Sale:user");

    setCards(JSON.parse(storagedSale)); 
  }

  async function addItem({ ID_PRODUTO, DESCRICAO, VALOR_UNITARIO, CD_CATEGORIA, QUANTIDADE, VALOR_TOTAL }: ProductsProps) {
    const sumQuantity = +1;

    let data = {
      ID_PRODUTO,
      DESCRICAO,
      VALOR_UNITARIO,
      CD_CATEGORIA,
      QUANTIDADE: sumQuantity,
    }

    addLaunch({ ...data });
  }

  async function removeItem({ ID_PRODUTO, DESCRICAO, VALOR_UNITARIO, CD_CATEGORIA, QUANTIDADE }: ProductsProps) {
    const sumQuantity = +1;

    let data = {
      ID_PRODUTO,
      DESCRICAO,
      VALOR_UNITARIO,
      CD_CATEGORIA,
      QUANTIDADE: sumQuantity
    }

    removeLaunch({ ...data })
  }

  useEffect(() => {
    setInterval(() => {
      loadCards();
    }, 100);
  }, []);

  return (
    <Container>
      {
        cards.map((card) => (
          <SaleCard
            description={card.DESCRICAO}
            price={card.VALOR_UNITARIO.toFixed(2)}
            quantity={card.QUANTIDADE}
            total={card.VALOR_TOTAL = card.QUANTIDADE * card.VALOR_UNITARIO}
            src={card.CD_CATEGORIA === 1 ? Hamburguer : Refrigerante}
            add={() => addItem({ ...card })}
            remove={() => removeItem({ ...card })}
          />
        ))
      }
    </Container>
  );
}
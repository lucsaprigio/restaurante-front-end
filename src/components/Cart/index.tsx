import { useEffect, useState } from 'react';

import { useSaleLaunch } from '../../context/saleProvider';
import { ProductsProps } from '../../DTOs/ProductDTO';
import Carrinho from '../../assets/carrinho-de-compras.png';

import { SaleCard } from '../SaleCard';
import {
  Container,
  FooterCart,
  ConfirmButton,
  CartImg,
} from './styles';

import Hamburguer from '../../assets/hamburguer.png';
import Refrigerante from '../../assets/refrigerante.png';
import { ButtonCart } from '../ButtonCart';

export function Cart() {
  const variants = {
    open: { opacity: 1, x: 0.2 },
    closed: { opacity: 0, x: "100%", transition: { duration: .1 } },
    leave: { opacity: 1, x: 0.2 },
  }

  const { addLaunch, removeLaunch } = useSaleLaunch();

  const [cards, setCards] = useState<ProductsProps[]>([]);
  const [total, setTotal] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  async function loadCards() {
    const storagedSale = localStorage.getItem("@Sale:user");
    const storagedTotal = localStorage.getItem("@Total:user");

    setCards(JSON.parse(storagedSale));
    setTotal(JSON.parse(storagedTotal));
  }

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

  async function openCart() {
    setIsOpen(isOpen => !isOpen);
  }

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
      loadCards();
    }, 100);
  }, []);

  return (
    <>
      <Container
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <CartImg src={Carrinho} alt="" />
        {
          cards.map((card) => (
            <SaleCard
              key={card.ID_PRODUTO}
              description={card.DESCRICAO}
              price={card.VALOR_UNITARIO.toFixed(2)}
              quantity={card.QUANTIDADE}
              total={card.VALOR_TOTAL.toFixed(2)}
              src={card.CD_CATEGORIA === 1 ? Hamburguer : Refrigerante}
              add={() => addItem({ ...card })}
              remove={() => removeItem({ ...card })}
            />
          ))
        }
        {
          cards.length > 0 ? (
            <FooterCart>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "15rem",
                  color: "var(--shape)"
                }}>{total}</span>
              <ConfirmButton>Confirmar</ConfirmButton>
            </FooterCart>
          ) : (<div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "15rem",
            }}>
            <span
              style={{ color: "var(--shape)", textAlign: "center" }}
            >
              Sua lista de pedidos está vazia...
            </span>
          </div>)
        }
      </Container>
      <ButtonCart
        counts={cards.length}
        openCart={openCart} />
    </>
  );
}
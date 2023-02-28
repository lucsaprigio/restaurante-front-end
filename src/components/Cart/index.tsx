import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoIosCloseCircle } from 'react-icons/io';

import { useSaleLaunch } from '../../context/saleProvider';
import { ProductsProps } from '../../DTOs/ProductDTO';
import Carrinho from '../../assets/carrinho-de-compras.png';

import { SaleCard } from '../SaleCard';
import {
  Container,
  WrapperCards,
  FooterCart,
  ConfirmButton,
  CartImg,
  CloseButton,
} from './styles';

import Hamburguer from '../../assets/hamburguer.png';
import Refrigerante from '../../assets/refrigerante.png';
import { ButtonCart } from '../ButtonCart';
import { ConfirmSale } from '../../Pages/ConfirmSale';

export function Cart() {
  const navigate = useNavigate();

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

  async function openCart() {
    setIsOpen(isOpen => !isOpen);
  }

  async function handleGoToConfirmPage() {
    const cdMesa = cards.map((card) => (
      card.CD_MESA
    ))

    let index = cdMesa.shift()

    navigate(`/confirm-sale/${index}`);
    setIsOpen(isOpen => !isOpen);
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
        <CloseButton onClick={() => setIsOpen(false)}>
          <IoIosCloseCircle style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }} size={30} />
        </CloseButton>
        <CartImg src={Carrinho} alt="" />
        <WrapperCards>
          {
            cards.map((card) => (
              <SaleCard
                key={card.ID_PRODUTO}
                description={card.DESCRICAO_PRODUTO}
                price={card.UNITARIO_PRODUTO.toFixed(2)}
                quantity={card.QUANTIDADE_PRODUTO}
                total={card.TOTAL_PRODUTO.toFixed(2)}
                src={card.CD_CATEGORIA === 1 ? Hamburguer : Refrigerante}
                add={() => addItem({ ...card })}
                remove={() => removeItem({ ...card })}
              />
            ))
          }
        </WrapperCards>
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
                }}>Valor Total:  {total}</span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--shape)",
                  margin: "1rem"
                }}>Mesa {cards.map((card) => card.CD_MESA).shift()}</span>

              <ConfirmButton onClick={handleGoToConfirmPage}>Continuar</ConfirmButton>
            </FooterCart>
          )
            :
            (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  position: "absolute",
                  top: "20rem",
                  left: '4rem'
                }}>
                <span
                  style={{ color: "var(--shape)", textAlign: "center" }}
                >
                  Sua lista de pedidos está vazia...
                </span>
              </div>
            )
        }
      </Container>
      <ButtonCart
        counts={cards.length}
        openCart={openCart} />
    </>
  );
}
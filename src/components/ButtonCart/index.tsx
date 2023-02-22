import {
  Container,
  Count,
} from './styles';

import { FaShoppingCart } from 'react-icons/fa'

interface ButtonCartProps {
  openCart: () => Promise<void>;
  counts: number;
}

export function ButtonCart({ openCart, counts }: ButtonCartProps) {
  return (
    <Container onClick={openCart}>
      {
        counts > 0 ? (
          <Count><span>{counts}</span></Count>
        ) : <></>
      }
      <FaShoppingCart style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "var(--shape)" }} size={20} />
    </Container>
  );
}
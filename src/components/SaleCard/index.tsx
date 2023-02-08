import {
  Container,
  Description,
  Wrapper,
  DescriptionContainer,
  Footer,
  Price,
  Total,
  Quantity,
  ImgWrapper,
  WrapperButton,
  AddButton,
  RemoveButton,
} from './styles';

import Add from '../../assets/adicionar-acrescentar.png'
import Remove from '../../assets/delete.png'

interface Props {
  description: string;
  price: string | number;
  total: string | number;
  src?: string;
  quantity: number;
  add?: () => Promise<void>;
  remove?: () => Promise<void>;
}

export function SaleCard({ description, price, total, src, quantity, add, remove }: Props) {
  return (
    <Container>
      <Wrapper>
        <DescriptionContainer>
          <Description>{description}</Description>
        </DescriptionContainer>
        <Footer>
          <Price>R$ {price}</Price>
          <Total>R$ {total}</Total>
        </Footer>
      </Wrapper>
      <ImgWrapper>
        <img src={src} />
      </ImgWrapper>
      <WrapperButton>
        <AddButton onClick={add}>
          <img src={Add} />
        </AddButton>
        <Quantity>{quantity}</Quantity>
        <RemoveButton onClick={remove}>
          <img src={Remove} />
        </RemoveButton>
      </WrapperButton>
    </Container>
  );
}
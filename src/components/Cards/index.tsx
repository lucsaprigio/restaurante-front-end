import {
  Container,
  Description,
  Wrapper,
  DescriptionContainer,
  Information,
  Footer,
  Price,
  PromotionPrice,
  ImgWrapper,
  AddButton,
} from './styles';

import Add from '../../assets/add.png'

interface Props {
  description: string;
  information?: string;
  price: string;
  promotionPrice?: number | string;
  src?: string;
  add: () => Promise<void>;
}

export function Cards({ description, information, price, promotionPrice, src, add }: Props) {
  return (
    <Container onClick={add}>
      <Wrapper>
        <DescriptionContainer>
          <Description>{description}</Description>
          <Information>{information}</Information>
        </DescriptionContainer>
        <Footer>
          <Price>R$ {price}</Price>
          <PromotionPrice>R$ {promotionPrice}</PromotionPrice>
        </Footer>
      </Wrapper>
      <ImgWrapper>
        <img src={src} />
      </ImgWrapper>
      <AddButton>
        <img src={Add} />
      </AddButton>
    </Container>
  );
}
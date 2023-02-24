import { InputHTMLAttributes } from 'react';
import {
  Container,
  Description,
  Wrapper,
  WrapperContent,
  Price,
} from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  description: string;
  price: string;
  disabled: boolean;
}

export function ConfirmCards({ description, price, disabled }: Props) {
  return (
    <Container>
      <Wrapper>
        <WrapperContent>
          <Description value={description} readOnly={disabled} />
        </WrapperContent>
        <WrapperContent>
          <Price value={price} readOnly={disabled} />
        </WrapperContent>
      </Wrapper>
    </Container>
  );
}
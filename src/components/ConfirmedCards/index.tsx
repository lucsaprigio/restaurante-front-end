import { useState, InputHTMLAttributes } from 'react';
import { BiEdit } from 'react-icons/bi';
import { GrFormAdd } from 'react-icons/gr';
import { MdOutlineRemove } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';

import {
  Container,
  Description,
  Wrapper,
  WrapperContent,
  Price,
  EditButton,
  Quantity,
  WrapperQuantity,
  TotalPrice,
  RemoveButton,
} from './styles';

export interface ConfirmCardsProps extends InputHTMLAttributes<HTMLInputElement> {
  index?: number;
  description: string;
  price: string;
  quantity: string;
  total: string;
}

export function ConfirmedCards({ index, description, price, quantity, total }: ConfirmCardsProps) {
  const [editInput, setEditInput] = useState(true);

  async function handleEditInput() {
    setEditInput(editInput => !editInput);
  }

  return (
    <Container>
      <Wrapper>
        <WrapperContent>
          <Description
            enabled={!editInput}
            disabledEdit={editInput}
            value={description}
            readOnly={editInput}
          />
        </WrapperContent>
        <WrapperContent>
          <strong>R$</strong>
          <Price
            enabled={!editInput}
            disabledEdit={editInput}
            value={price}
            readOnly={editInput} />
        </WrapperContent>
        <WrapperQuantity>
          <Quantity
            maxLength={3}
            enabled={!editInput}
            disabledEdit={editInput}
            value={quantity}
            readOnly={editInput}
          />
        </WrapperQuantity>
        <WrapperContent>
          <strong>R$</strong>
          <TotalPrice
            enabled={!editInput}
            disabledEdit={editInput}
            value={total}
            readOnly={editInput} />
        </WrapperContent>
      </Wrapper>
      <EditButton onClick={handleEditInput}>
        <BiEdit style={{ color: "var(--blue)" }} size={24} />
      </EditButton>
    </Container>
  );
}
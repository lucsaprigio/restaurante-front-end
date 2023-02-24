import { useState, InputHTMLAttributes } from 'react';
import { BiEdit } from 'react-icons/bi';
import { GrFormAdd } from 'react-icons/gr';
import { MdOutlineRemove } from 'react-icons/md';
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
} from './styles';
import { useSaleLaunch } from '../../context/saleProvider';

export interface ConfirmCardsProps extends InputHTMLAttributes<HTMLInputElement> {
  description: string;
  price: string;
  quantity: string;
  total: string;
  disabled: boolean;
  add: () => Promise<void>;
  remove: () => Promise<void>;

}

export function ConfirmCards({ description, price, quantity, total, add, remove }: ConfirmCardsProps) {
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
          <Price
            enabled={!editInput}
            disabledEdit={editInput}
            value={price}
            readOnly={editInput} />
        </WrapperContent>
        <WrapperQuantity>
          <button onClick={add}>
            <GrFormAdd size={20} />
          </button>
          <Quantity
            maxLength={3}
            enabled={!editInput}
            disabledEdit={editInput}
            value={quantity}
            readOnly={editInput} />
          <button onClick={remove}>
            <MdOutlineRemove size={20} />
          </button>
        </WrapperQuantity>
        <WrapperContent>
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
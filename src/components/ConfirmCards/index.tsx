import { useState, InputHTMLAttributes, ChangeEventHandler } from 'react';
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

export interface ConfirmCardsProps<T> extends InputHTMLAttributes<HTMLInputElement> {
  index?: number;
  description: string;
  onChangeDescription: ChangeEventHandler<T> | undefined;
  price: string;
  onChangePrice: ChangeEventHandler<T> | undefined;
  quantity: string;
  onChangeQuantity: ChangeEventHandler<T> | undefined;
  total: string;
  onChangeTotal: ChangeEventHandler<T> | undefined;
  disabled: boolean;
  add?: () => Promise<void>;
  remove?: () => Promise<void>;
  removeItem?: () => Promise<void>;
}

export function ConfirmCards({ index,
  description,
  onChangeDescription,
  price,
  onChangePrice,
  quantity,
  onChangeQuantity,
  total,
  onChangeTotal,
  add,
  remove,
  removeItem
}: ConfirmCardsProps<T>) {

  const [editInput, setEditInput] = useState(true);

  async function handleEditInput() {
    setEditInput(editInput => !editInput);
  }

  async function handleChangeItem(e: any, index: number) {
    description = e.target.value;
  }

  return (
    <Container>
      <Wrapper>
        <WrapperContent>
          <Description
            enabled={!editInput}
            disabledEdit={editInput}
            value={description}
            onChange={onChangeDescription}
            readOnly={!editInput}
          />
        </WrapperContent>
        <WrapperContent>
          <strong>R$</strong>
          <Price
            enabled={!editInput}
            disabledEdit={editInput}
            value={price}
            onChange={onChangePrice}
            readOnly={!editInput} />
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
            onChange={onChangeQuantity}
            readOnly={!editInput} />
          <button onClick={remove}>
            <MdOutlineRemove size={20} />
          </button>
        </WrapperQuantity>
        <WrapperContent>
          <strong>R$</strong>
          <TotalPrice
            enabled={!editInput}
            disabledEdit={editInput}
            value={total}
            onChange={onChangeTotal}
            readOnly={editInput} />
        </WrapperContent>
      </Wrapper>
      <EditButton onClick={handleEditInput}>
        <BiEdit style={{ color: "var(--blue)" }} size={24} />
      </EditButton>
      <RemoveButton onClick={removeItem}>
        <FaTrash style={{ color: "var(--blue)" }} size={18} />
      </RemoveButton>
    </Container>
  );
}
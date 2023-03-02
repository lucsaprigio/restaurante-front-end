import { useState, InputHTMLAttributes, ChangeEventHandler } from 'react';
import { BiEdit } from 'react-icons/bi';
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
  onChangeDescription?: ChangeEventHandler<T> | undefined;
  price: string;
  onChangePrice?: ChangeEventHandler<T> | undefined;
  quantity: string;
  onChangeQuantity?: ChangeEventHandler<T> | undefined;
  total: string;
  onChangeTotal?: ChangeEventHandler<T> | undefined;
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
  //@ts-ignore
}: ConfirmCardsProps<T>) {

  const [editInput, setEditInput] = useState(true);

  async function handleEditInput() {
    setEditInput(editInput => !editInput);
  }

  return (
    <Container>
      <Wrapper>
        <WrapperContent>
          <Description
            max-length={25}
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
            placeholder='Valor'
            enabled={!editInput}
            disabledEdit={editInput}
            value={price}
            onChange={onChangePrice}
            readOnly={!editInput}
          />
        </WrapperContent>
        <WrapperQuantity>
          <Quantity
            maxLength={3}
            type="number"
            placeholder='Qtd'
            enabled={!editInput}
            disabledEdit={editInput}
            value={quantity}
            onChange={onChangeQuantity}
            readOnly={!editInput} />
        </WrapperQuantity>
        <WrapperContent>
          <strong>R$</strong>
          <TotalPrice
            placeholder='Total'
            enabled={!editInput}
            disabledEdit={editInput}
            value={total}
            onChange={onChangeTotal}
            readOnly={editInput}
          />
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
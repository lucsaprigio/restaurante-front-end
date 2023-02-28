import styled, { css } from 'styled-components';

interface Props {
  enabled: boolean;
  disabledEdit: boolean;
}

export const Container = styled.div`
    width: 100%;
    height: 2.5rem;

    background:
    linear-gradient(
           to top,
           #F0F8FF,
           #F0F8FA
  );
    
    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.1);

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem;
    border-radius: 0.4rem;
    margin: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-between;

  height: 100%;
`;

export const WrapperContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 0.4rem;
`;

export const WrapperQuantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 0.4rem;

    button {
      display: flex;
      align-items: center;

      background: transparent;
    }
`;

export const Description = styled.input<Props>`
      width: 15rem;
      font-size: .9rem;
      font-weight: bold;
      text-align: left;

      border: none;

      padding: 0.1rem;
  ${({ enabled }) =>
    enabled && css`
    background: transparent;
    border: solid 0.1rem;
    border-color: var(--blue);
  `
  }

  ${({ disabledEdit }) =>
    disabledEdit && css`
      background: transparent;
      border-bottom: solid 2px;
      border-color: transparent;
  `
  }
`;

export const Price = styled.input<Props>`
  width: 4rem;

  font-size: .9rem;
  font-weight: bold;

  border: none;
  text-align: left;

  padding: 0.1rem;

  ${({ enabled }) =>
    enabled && css`
    background: transparent;
    border: solid 0.1rem;
    border-color: var(--blue);
  `
  }

  ${({ disabledEdit }) =>
    disabledEdit && css`
      background: transparent;
      border-color: transparent;
  `
  }
`;

export const Quantity = styled.input<Props>`
  width: 2rem;

  font-size: .9rem;
  font-weight: bold;

  border: solid 0.1rem;
  border-color: var(--blue);
  text-align: center;

  padding: 0.1rem;

  ${({ enabled }) =>
    enabled && css`
    background: transparent;
    border: solid 0.1rem;

    border-color: var(--blue);
  `
  }

  ${({ disabledEdit }) =>
    disabledEdit && css`
      border-color: var(--blue);
  `
  }
`;

export const TotalPrice = styled.input<Props>`
  width: 4rem;

  font-size: .9rem;
  font-weight: bold;

  border: none;
  text-align: left;

  padding: 0.1rem;

  ${({ enabled }) =>
    enabled && css`
    background: transparent;
    border: solid 0.1rem;
    border-color: var(--blue);
  `
  }

  ${({ disabledEdit }) =>
    disabledEdit && css`
      background: transparent;
      border-color: transparent;
  `
  }
`;

export const EditButton = styled.button`
  background: transparent;
  border: none;
  display: none;

  &:hover {
      transform: scale(1.1);
      transition: 50ms;
}

`;
export const RemoveButton = styled.button`
  background: transparent;
  border: none;

  &:hover {
      transform: scale(1.1);
      transition: 50ms;
}
`;

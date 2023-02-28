import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 2rem;
`;

export const Title = styled.h2`
  margin: 1rem;
`;

export const Text = styled.span`

`;

export const HeaderTitleItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 0.9rem;
    margin: 1rem 7rem;
  }
`;

export const Content = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 60rem;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content:center;

  border-radius: 0.3rem;

  background: var(--shape);

`;

export const WrapperConditional = styled.div`
  display: flex;
  align-items: center;
  jutsify-content: center;
  flex-direction: column;

`;

export const GoSaleButton = styled.button`
    background: var(--blue);
    color: var(--shape);

    margin-top: 1rem;
    border-radius: 0.2rem;

    padding: .2rem;

`;

export const Confirm = styled.button`
    width: 11rem;
    height: 100%;

    display: flex;
    align-items:center;
    justify-content: space-around;

    background: var(--blue);
    color: var(--shape);

    margin-top: 1rem;
    border-radius: 0.2rem;

    padding: .2rem;

    margin: 1rem;

    :hover {
      transition: 200ms;
      background: var(--semi-blue);
    }
`;

export const FooterConfirm = styled.div`
  position: fixed;
  bottom: 0;  

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
  width: 100%;
  height: 3rem;

  background: var(--blue);
`;

export const TotalPrice = styled.div`
  span {
    color: var(--shape);
  }
`;

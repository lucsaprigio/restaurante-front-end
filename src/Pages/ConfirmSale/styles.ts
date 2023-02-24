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

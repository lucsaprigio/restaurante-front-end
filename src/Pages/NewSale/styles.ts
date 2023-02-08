import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  padding: 0 18rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center; 
  flex-direction: column;
  
  width: 100%;

  strong {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 1rem;

    font-size: 1.8rem;
  }

  span {
    margin-top: 2rem;
  }
`;

export const Content = styled.div`
    width: 100%;

    margin-top: 3rem; 
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;
import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  width: 100%;
  height: 100%;

  padding: 2rem;
`;

export const Content = styled.div`
    width: 100%;

    display: flex;
    align-items: left;
    justify-content: left;

    flex-direction: column;

    padding: 0 15rem;
`;

export const Header = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: solid 1px;
`;

export const Title = styled.strong`
  font-size: 2rem;

  margin-bottom: 1rem;
`;

export const SubTitle = styled.strong`
    text-align: left;
    margin-left: 8rem;
`;


export const Sales = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-around;

  margin-top: 2rem;
  border-bottom: solid 1px;
  

  span {
    margin-left: 5rem;
  }
`;

export const SaleFooter = styled.div`
    display: flex;
    align-items: left;
    justify-content: space-between;
    margin-top: 1rem;

    strong {
      font-size: 1.2rem;
    }
`;
import styled from 'styled-components';

export const Container = styled.div`
    width: 60%;
    height: 4rem;

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
    flex-direction: column;

    margin: 0 1rem;
`;

export const Description = styled.input`
  font-size: .9rem;
  font-weight: bold;
  text-align: left;
  
  border: none;

  padding: 0.1rem;
`;

export const Price = styled.input`
  font-size: .9rem;
  font-weight: bold;

  border: none;
  text-align: left;

  padding: 0.1rem;
`;
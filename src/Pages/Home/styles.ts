import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  display: flex;
  align-items: center
  
  width: 100%;
  height: 100%;

  padding: 5rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;

  
  flex-wrap: wrap;
  
  width: 100%;
  height: 100%;

  margin-left: 10rem;
`;

export const Table = styled.button`
    width: 15rem;
    height: 8rem;

    margin: 1rem;

    
    background-image: 
          linear-gradient(
           to bottom,
           #D3D3D3,
           #DCDCDC
          );

    box-shadow: 0px 2px 2px 4px rgba(0, 0, 0, 0.1);

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    border-radius: 0.7rem;

    :hover {
      transition: 400ms;
      filter: brightness(0.9);
    }

    img {
      width: 5rem;
    }
`;

export const BusyTable = styled.button`
    width: 15rem;
    height: 8rem;

    margin: 1rem;

    
    background-image: 
          linear-gradient(
           to bottom,
           #e52e4d,
           #8F002B
          );

    box-shadow: 0px 2px 2px 4px rgba(0, 0, 0, 0.1);

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    border-radius: 0.7rem;

    :hover {
      transition: 400ms;
      filter: brightness(0.9);

    }

    img {
      width: 5rem;
    }
`;

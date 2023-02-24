import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'

export const Container = styled(motion.div)`
  width: 50vh;
  height: 100vh;
  background: var(--blue);
  box-shadow: 0px 2px 2px 4px rgba(0, 0, 0, 0.3);

  padding: 5rem 0;

  position: fixed;
  top:0;
  right: 0;

  transition: 100ms;
`;

export const WrapperCards = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  ::-webkit-scrollbar-track {
    background: var(--blue);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--shape);
    border-radius: 20px;
  }

`;

export const CloseButton = styled.button`
  background: transparent;

  position: absolute;

  top: 1.5rem;
  left: 1rem;
`;

export const FooterCart = styled.footer`
  width: 100%;

  position: fixed;

  padding: 1rem;

  bottom: 0;
  right: 0;
  background: transparent;
`;

export const ConfirmButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.4rem;
  text-decoration: none;
  background: var(--shape);
  color: black;
  
  border-radius: .4rem;

  &:hover {
    filter: brightness(0.9);
    transition: 100ms;
  }
`;

export const CartImg = styled.img`
  width: 9rem;
  height: 9rem;
  position: absolute;

  top: 15rem;
  left: 6rem;
  opacity: 0.2;

  z-index: -1;

  resize: contain;
`;


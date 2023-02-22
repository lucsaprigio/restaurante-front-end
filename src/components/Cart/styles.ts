import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 50vh;
  height: 100vh;
  background: var(--blue);
  box-shadow: 0px 2px 2px 4px rgba(0, 0, 0, 0.3);
  overflow-y: scroll;

  padding: 5rem 0;

  position: fixed;
  top:0;
  right: 0;

  transition: 100ms;
`;

export const FooterCart = styled.footer`
  width: 100%;

  position: relative;

  padding: 1rem;

  bottom: 0;
  right: 0;
  background: var(--blue);
`;

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 0.4rem;
  
  border-radius: .4rem;
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


import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.button)`
 width: 3rem;
 height: 3rem;
 background: var(--blue);
 display: flex;
 align-items: center;
 justify-content: center;

 position: fixed;
 
 right: 3rem;
 top: 1rem;

 border-radius: 100%;
`;

export const Count = styled(motion.div)`
  width: 1rem;
  height: 1rem;

  background: var(--red);
  border-radius: 100%;
  position: absolute;

  top: 0;
  right: 0;

  span {
    color: var(--shape);
    text-align: center;
  }
`;
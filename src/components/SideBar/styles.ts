import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Container = styled(motion.main)`
            height: 100vh;
            position: absolute;
            top: 0;
            left: 0;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Content = styled(motion.div)`
    width: 13rem;
    height: 100vh;
    display: flex;
    background: var(--background);
    box-shadow: 0px 2px 2px 4px rgba(0, 0, 0, 0.3);
    background-image: 
          linear-gradient(
           to bottom,
           #00004B, 
           #00008B
          );
`;

export const MenuBars = styled(motion.nav)`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        
            div {
            display: flex;
            align-items: center;
            flex-direction: column;
            margin: 1rem;
            img {
                width: 8rem;
                margin-top: 2rem;
            }
        }
`;

export const IconWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const NavTo = styled(Link)`
                margin-top: 3rem;
                border-color: var(--blue);
                color: var(--shape);

                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                
                text-decoration: none;
                text-align: center;
                font-size: 0.9rem;
    
                &:hover {
                    transform: scale(1.1);
                    transition: 200ms;
                    filter: brightness(0.8);
                }
                &.active {
                    filter: brightness(1);
                    border-bottom: 1px solid;
                    transform: scale(1.1);   
                    border-color: var(--blue-light);
                    font-weight: bold;
                }
`;

export const LogoutButton = styled.button`
                margin-top: 3rem;
                text-decoration: none;
                border: none;
                color: var(--shape);

                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-direction: column;
                background: transparent;
    
                &:hover {
                    transform: scale(1.1);
                    transition: 200ms;
                    filter: brightness(0.8);
                }
                &.active {
                    filter: brightness(1);
                    border-bottom: 1px solid;
                    transform: scale(1.1);   
                    border-color: var(--shape);
                    font-weight: bold;
                }
`;


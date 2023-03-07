import styled from 'styled-components';

export const Container = styled.button`
    width: 18rem;
    height: 7rem;

    background:
    linear-gradient(
           to top,
           #F0F8FF,
           #F0F8FA
  );
    
    box-shadow: 0px 2px 2px 4px rgba(0, 0, 0, 0.1);

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem;
    border-radius: 0.8rem;

    :hover {
      transition: 400ms;
      filter: brightness(0.9);
    }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-between;

  height: 100%;
  
  flex-direction: column;
`;

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Description = styled.strong`
  font-size: 0.8rem;
  text-align: left;
`;

export const Information = styled.span`
  font-size: 0.8rem;
  color: var(--text-body)
`;

export const Footer = styled.div`
  
`;

export const Price = styled.span`
  font-size: 0.9rem;
  color: var(--whatsapp)
`;

export const PromotionPrice = styled.span`
  font-size: 0.8rem;
  text-decoration: line-through;
  color: var(--text-body);
  margin-left: 0.9rem;
`;

export const ImgWrapper = styled.div`
  display: flex;

  img {
    resize: 'contain';
    width: 5rem;
    height: 5rem;
  }
`;
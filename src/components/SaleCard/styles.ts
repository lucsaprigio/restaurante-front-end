import styled from 'styled-components';

export const Container = styled.div`
    width: 20rem;
    height:   ;

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
    margin: 1rem;
`;

export const AddButton = styled.button`
      background: transparent;
      img {

      resize-mode: contain;

      width: 1.5rem;
      height: 1.5rem;
    }
`;

export const RemoveButton = styled.button`
      background: transparent;

      img {
      resize-mode: contain;

      width: 2rem;
      height: 2rem;
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
  font-size: 1rem;
  text-align: left;
`;

export const Footer = styled.div`
  
`;

export const Price = styled.span`
  font-size: 0.8rem;
`;

export const Total = styled.span`
  font-size: 0.9rem;
  color: var(--whatsapp);
`;

export const Quantity = styled.span`
    margin: 0.3rem;
    font-size: 0.8rem;
`;

export const ImgWrapper = styled.div`
  display: flex;

  img {
    resize: 'contain';
    width: 5rem;
    height: 5rem;
  }
`;

export const WrapperButton = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 4rem;
`;
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    
    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 3rem;
        border-radius: 0.25rem;
        
        border: 1px solid #d7d7d7;
        background: #e7e9ee;
        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }
    }
`;

export const Content = styled.div`
  width: 100%;
  height: 60vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: var(--text-body);

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  ::-webkit-scrollbar-track {
    background: var(--shape);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--blue);
    border-radius: 20px;
  }
`;
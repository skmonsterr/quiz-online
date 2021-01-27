import styled from 'styled-components'

// Criando Compontente CARDS
const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid #181818;
  background-color:#727272;
  opacity: 0.8;
  border-radius: 4px;
  overflow: hidden;

  
  h1, h2, h3 {
    font-size: 16px;
    font-family:'Fira Code';
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  
  p {
    font-size: 16px;
    font-family:'Fira Code Light';
    font-weight: 300;
    line-height: 1;
  }
`;

// Criando Componente CARD HEADER
Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;

  background: ${({ theme }) => theme.grads.primary};

  * {
    margin: 0;
  }
`;

// Criando Componente CARDS CONTENT
Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Widget;
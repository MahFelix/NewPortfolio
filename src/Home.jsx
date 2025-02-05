import styled, { createGlobalStyle } from 'styled-components';
import Trabalhos from './Trabalhos'
import Sobre from './Sobre';


// Definindo variáveis de cores para facilitar a manutenção
const colors = {
  background: '#1E1E1E',
  surface: '#1e1e1e',
  primary: '#292929',
  text2: '#ffffff',
  text:'#2CA1CF',
  border: '#333',
};

// Estilos globais
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: ${colors.background};
    color: ${colors.text};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: bold;
  }

  p {
    margin: 0;
    line-height: 1.5;
  }

  a {
    color: ${colors.text};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

// Componentes estilizados
const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background: ${colors.primary};
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${colors.border};
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Section = styled.section`
  padding: 50px 20px;
  background: ${colors.surface};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomeContent = styled.div`
  text-align: center;
`;

const Name = styled.h1`
  font-size: 3rem;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #ccc;
`;

// Componente Button reutilizável
const Button = styled.button`
  background: ${({ variant }) => (variant === 'outline' ? 'transparent' : colors.primary)};
  color: ${colors.text};
  border: 1px solid ${colors.text};
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: ${({ variant }) => (variant === 'outline' ? colors.text : colors.surface)};
    color: ${({ variant }) => (variant === 'outline' ? colors.background : colors.text)};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Componente Portfolio
const Portfolio = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <Nav>
            <Button variant="outline">Início</Button>
            <Button variant="outline">Trabalhos</Button>
            <Button variant="outline">Sobre</Button>
            <Button variant="outline">Contato</Button>
          </Nav>
        </Header>
        <Section>
          <HomeContent>
            <Name>Agnaldo Felix</Name>
            <Subtitle>Desenvolvedor Full Stack e Web Designer</Subtitle>
          </HomeContent>
        </Section>
        <Trabalhos/>
        <Sobre/>
      </Container>
    </>
  );
};

export default Portfolio;
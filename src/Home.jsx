import styled, { createGlobalStyle, keyframes } from 'styled-components';
import Trabalhos from './WorksPage';
import Sobre from './Sobre';
import ExperienceStats from './Experience';
import ContactSection from './Contact';

// Definição de cores
const colors = {
  background: '#1E1E1E',
  surface: '#000000',
  primary: '#000000',
  text2: '#ffffff',
  text: '#2CA1CF',
  border: '#333',
};

// Animação de digitação
const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  50% { border-color: transparent; }
`;

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
  height: 0;
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${colors.primary};


  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
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
  color: ${colors.text};
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: ${colors.text2};
  border-right: 3px solid ${colors.text2};
  white-space: nowrap;
  overflow: hidden;
  width: 16ch;
  animation: ${typing} 3s steps(16) infinite alternate, ${blink} 0.7s step-end infinite;
`;

const Button = styled.button`
  background: ${({ variant }) => (variant === 'outline' ? 'transparent' : colors.primary)};
  color: ${colors.text};
  border: 1px solid ${colors.text};
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s, color 0.3s;
  width: 100%;

  &:hover {
    background: ${({ variant }) => (variant === 'outline' ? colors.text : colors.surface)};
    color: ${({ variant }) => (variant === 'outline' ? colors.background : colors.text)};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

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
            <Subtitle>Desenvolvedor Web e Web Designer   </Subtitle>
          </HomeContent>
        </Section>
        <Trabalhos />
        <Sobre />
        <ExperienceStats/>
        <ContactSection/>
      </Container>
    </>
  );
};

export default Portfolio;

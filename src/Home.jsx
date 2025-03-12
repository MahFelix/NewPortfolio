/* eslint-disable react/no-unescaped-entities */
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import Trabalhos from './components/WorksPage';
import Sobre from './components/Sobre';
import ExperienceStats from './components/Experience';
import ContactSection from './components/Footer';
import WorksPageMobile from './components/WorkPageMobile';
import NavBar from './components/Navbar';


// Definição de cores
const colors = {
  background: '#1E1E1E',
  surface: '#000000',
  primary: '#000000',
  text2: '#ffffff',
  text: '#2CA1CF',
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
  position: relative;
  
`;

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.surface};
  position: relative;

  @media (max-width: 768px) {
    height: 90vh;
  }
`;

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;

`;

const Greeting = styled.p`
  color: aliceblue;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const Name = styled.h1`
  font-size: 3rem;
  color: white;
  text-shadow: ${colors.text} 0px 0px 4px;
  text-align: center;
  margin-bottom: 20px;

  span {
    color: #2CA1CF;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Welcome = styled.p`
  color: aliceblue;
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const orbit = keyframes`
  0% { transform: rotate(0deg) translateX(50px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
`;

const AtomContainer = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  top: 10%;
  right: 47%;
  z-index: 0;

  @media (max-width: 768px) {
    width: 90px;
  height: 90px;
  top: 5%;
  right: 40%;
  }


`;

/* Núcleo do átomo */
const Nucleus = styled.div`
  width: 20px;
  height: 20px;
  background-color: #2CA1CF;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

/* Elétrons orbitando */
const Electron = styled.div`
  width: 8px;
  height: 8px;
  background-color: #2CA1CF;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${orbit} ${(props) => props.duration || "3s"} linear infinite;
`;

/* Órbitas dos elétrons */
const Orbit = styled.div`
  width: ${(props) => props.size || "100px"};
  height: ${(props) => props.size || "100px"};
  border: 2px dashed rgba(44, 161, 207, 0.3);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Portfolio = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <NavBar />
        <Section>
          <AtomContainer>
            <Nucleus />
            <Orbit size="60px">
              <Electron duration="2s" />
            </Orbit>
            <Orbit size="100px">
              <Electron duration="3s" style={{ animationDelay: "-1.5s" }} />
              <Electron duration="3s" style={{ animationDelay: "-0.75s" }} />
            </Orbit>
            <Orbit size="140px">
              <Electron duration="4s" style={{ animationDelay: "-2s" }} />
              <Electron duration="4s" style={{ animationDelay: "-1s" }} />
              <Electron duration="4s" style={{ animationDelay: "-0.5s" }} />
            </Orbit>
          </AtomContainer>
          <HomeContent>
            <Greeting>"Hello Guys!" I am</Greeting>
            <Name>
              <span>Agnaldo Felix</span>
              <br />
              Programador Full Stack <br></br><span>&</span> <br />
              Web Designer
            </Name>
            <Welcome>Bem vindos ao meu portfólio.</Welcome>
          </HomeContent>
        </Section>
        <Trabalhos />
        <WorksPageMobile />
        <Sobre />
        <ExperienceStats />
        <ContactSection />
      </Container>
    </>
  );
};

export default Portfolio;
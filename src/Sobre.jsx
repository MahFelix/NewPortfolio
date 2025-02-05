
import styled, { keyframes } from "styled-components";
import TechBar from "./TechBar";

const SobreContainer = styled.div`
  background-color: #000000;
  color: #2CA1CF;
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 50px 20px;
`;

const Titulo = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 50px;
  text-align: center;
`;

const Secao = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  width: 60%;
  gap: 40px;
  min-height: 60vh;
  position: relative;
  text-align: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Card = styled.div`
  max-width: 500px;
  padding: 20px;
  position: relative;

  &:nth-child(1) {
    justify-self: start;
  }

  &:nth-child(2) {
    justify-self: end;
    margin-top: 200px;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    justify-self: center;
    margin-top: 0;
  }
`;

/* Animação para os pontinhos principais */
const moveDots = keyframes`
  0% { transform: translate(0, 0); }
  25% { transform: translate(10px, -10px); }
  50% { transform: translate(-10px, -10px); }
  75% { transform: translate(-10px, 10px); }
  100% { transform: translate(0, 0); }
`;

/* Animação para o pontinho que se move entre eles */
const movingDot = keyframes`
  0% { transform: translate(0, 0); }
  25% { transform: translate(10px, 5px); }
  50% { transform: translate(-5px, -10px); }
  75% { transform: translate(10px, -5px); }
  100% { transform: translate(0, 0); }
`;

/* Container dos pontinhos */
const DotsContainer = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  top: -20px;
  right: -20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

/* Pontinhos fixos que se movem */
const Dot = styled.div`
  width: 6px;
  height: 6px;
  border: 2px solid #2CA1CF;
  border-radius: 50%;
  animation: ${moveDots} 2s infinite ease-in-out alternate;
`;

/* Pontinho que se movimenta entre os outros */
const MovingDot = styled.div`
  width: 6px;
  height: 6px;
  background-color: #2CA1CF;
  border-radius: 50%;
  position: absolute;
  animation: ${movingDot} 1.5s infinite ease-in-out alternate;
`;

const Sobre = () => {
  return (
    <SobreContainer>
      <Titulo>SOBRE</Titulo>
      <Secao>
        <Card>
          <DotsContainer>
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <MovingDot />
          </DotsContainer>
          <h2> WEB DESIGNER</h2>
          <p>
            Sou um web designer especializado em criar sites e interfaces visuais utilizando
            ferramentas como WordPress e Elementor. Meu trabalho combina design funcional e criativo, 
            desenvolvido com o suporte de ferramentas como Photoshop e Figma para garantir layouts modernos, 
            responsivos e alinhados à identidade visual do cliente. Com foco na experiência do usuário, 
            entrego soluções personalizadas que transformam ideias em projetos digitais únicos e impactantes.
          </p>
          <DotsContainer>
           <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <MovingDot />
          </DotsContainer>
        </Card>
        <Card>
          <DotsContainer>
           <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <MovingDot />
          </DotsContainer>
          <h2>DESENVOLVEDOR WEB</h2>
          <p>
            Sou um web designer especializado em criar sites e interfaces visuais utilizando
            ferramentas como WordPress e Elementor. Meu trabalho combina design funcional e criativo, 
            desenvolvido com o suporte de ferramentas como Photoshop e Figma para garantir layouts modernos, 
            responsivos e alinhados à identidade visual do cliente. Com foco na experiência do usuário, 
            entrego soluções personalizadas que transformam ideias em projetos digitais únicos e impactantes.
          </p>
        </Card>
      </Secao>
      <TechBar/>
    </SobreContainer>
  );
};

export default Sobre;

import styled, { keyframes } from "styled-components";
import TechBar from "./TechBar";
import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

const SobreContainer = styled.div`
  background-color: #000000;
  color: #2CA1CF;
  font-family: 'Poppins', sans-serif;
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
  padding-top: 20px;
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
    width: 100%;
    gap: 60px;
  }
`;

const Card = styled.div`
  padding: 20px;
  position: relative;
  border: 1px solid #ffffff7f;
  border-radius: 20px;
  background-color: #33323257;
  gap: 20px;

  

  &:nth-child(1) {
    justify-self: start;
    
  }

  &:nth-child(2) {
    justify-self: end;
    margin-top: 200px; /* Adiciona margin-top de 200px ao segundo card */
  }

  h2 {
    font-size: 1.8rem;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #2ca1cfc1;
  }

  @media (max-width: 768px) {
    justify-self: center;
    margin-top: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:nth-child(2) {
      margin-top: 0; /* Remove o margin-top no mobile */
    }
  }
`;

/* Animação para os elétrons orbitando */
const orbit = keyframes`
  0% { transform: rotate(0deg) translateX(50px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
`;

/* Container para o átomo */
const AtomContainer = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  top: 1%;
  left: -20%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    display: none;
  }
`;

const AtomContainer2 = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  bottom: -15%;
  right: -45%;
  transform: translate(-50%, -50%);
  margin-top: 20px;

  @media (max-width: 768px) {
    display: none;
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

/* Animação para os dots no mobile */
const moveDot = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

/* Container para os dots no mobile */
const MobileDotsContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
  }
`;

/* Dot no mobile */
const MobileDot = styled.div`
  width: 10px;
  height: 10px;
  background-color: #2CA1CF;
  border-radius: 50%;
  animation: ${moveDot} 1.5s infinite ease-in-out;
  animation-delay: ${(props) => props.delay || "0s"};
`;

const Sobre = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
      once: true, // A animação ocorre apenas uma vez
    });
  }, []);


  return (
    <SobreContainer id="sobre">
      <Titulo>Sobre mim</Titulo>
      <Secao>
        <Card>
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

          <MobileDotsContainer>
            <MobileDot delay="0s" />
            <MobileDot delay="0.5s" />
            <MobileDot delay="1s" />
          </MobileDotsContainer>

          <h2>WEB DESIGNER</h2>
          <p>
            Apaixonado por design moderno e interfaces intuitivas, crio experiências visuais envolventes para aplicações web, utilizando Figma e PhotoshopCS6. 
            Desenvolvo com Wordpress ou React , garantindo layouts responsivos, animações suaves e transições elegantes. 
            Meu foco é desenvolver interfaces limpas e funcionais, priorizando usabilidade e estética. 
            Tenho experiência na criação de dashboards administrativos, e-commerces e aplicativos interativos, s
            empre buscando inovação e acessibilidade.
          </p>
        </Card>
        <Card>
          <AtomContainer2>
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
          </AtomContainer2>

          <MobileDotsContainer>
            <MobileDot delay="0s" />
            <MobileDot delay="0.5s" />
            <MobileDot delay="1s" />
          </MobileDotsContainer>

          <h2>DESENVOLVEDOR WEB</h2>
          <p>
            Desenvolvedor Web Full Stack com experiência em Java (Spring Boot), JavaScript (React, Vite), PostgreSQL e Firebase. 
            Construo APIs seguras e escaláveis, desenvolvendo sistemas como e-commerces, dashboards e apps interativos. 
            No frontend, foco em React com Styled Components, e no backend, em Spring Boot e Node com boas práticas e segurança. 
            Sempre buscando inovação, performance e eficiência.
          </p>
        </Card>
      </Secao>
      <TechBar />
    </SobreContainer>
  );
};

export default Sobre;
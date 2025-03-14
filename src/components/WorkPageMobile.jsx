import { useState, useEffect  } from 'react';

import styled, { createGlobalStyle } from 'styled-components';
import Pro from "../assets/Projeto1.jpeg";
import Pro2 from "../assets/Projeto2.jpeg";
import Pro3 from "../assets/AerisTT.jpeg";
import Pro4 from "../assets/Projeto3.jpeg";
import Pro5 from "../assets/SonusT.jpeg";
import Pro6 from "../assets/VanguardT.jpeg";
import Pro7 from "../assets/CaelumT.jpeg";
import Pro8 from "../assets/RifaT.jpeg";
import Pro9 from "../assets/FarmaciaT.jpeg";

// Definindo variáveis de cores
const colors = {
  background: '#4E74A6',
  text: '#FFFFFF',
  tech: '#2CA1CF',
  projectBackground: '#FFFFFF',
  projectText: '#000000',
};

// Estilos globais
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color:#4E74A6;
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
    color: ${colors.tech};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

// Componentes estilizados
const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 50px;
  padding-top: 20px;

  @media (max-width: 768px) {
    
    margin-bottom: 30px;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.projectBackground};
  color: ${colors.projectText};
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 1000px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  position: relative;
  z-index: 1;

  ${ProjectContainer}:hover & {
    transform: translateY(-30%);
  }

  @media (max-width: 768px) {
    ${ProjectContainer}:active & {
      transform: none;
    }
  }
`;

const TechStack = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%;
  background: ${colors.tech};
  color: ${colors.text};
  padding: 10px;
  text-align: center;
  border-radius: 0 0 10px 10px;
  transform: translateY(100%);
  transition: transform 0.5s ease;
  z-index: 0;

  ${ProjectContainer}:hover & {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    transform: translateY(0);
    height: auto;
    padding: 5px;
  }
`;

const ProjectContent = styled.div`
  width: 100%;
  text-align: center;
`;

const ProjectTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProjectDescription = styled.p`
  margin-bottom: 20px;
  font-size: 1rem;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 15px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const ProjectLink = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background: ${colors.tech};
  color: ${colors.text};
  border-radius: 5px;
  transition: background 0.3s ease;

  &:hover {
    background: darken(${colors.tech}, 10%);
  }

  @media (max-width: 768px) {
    width: 70%;
  }
`;

const GitHubCodeButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background: #333;
  color: ${colors.text};
  border-radius: 5px;
  transition: background 0.3s ease;


  &:hover {
    background: #555;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
  }
`;

const ExpandButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #2CA1CF;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 15px 30px;
  border-radius: 10px;
  text-decoration: none;
  transition: transform 0.3s ease, background 0.3s ease;
  margin: 40px auto 0;
  box-shadow: 0 0 10px #2CA1CF, 0 0 20px #2CA1CF;
  width: 300px;
  text-align: center;
  border: none;
  cursor: pointer;

  &:hover {
    background: #1b7fa5;
    transform: scale(1.1);
    box-shadow: 0 0 15px #2CA1CF, 0 0 30px #2CA1CF;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.2rem;
    padding: 10px 20px;
  }
`;

const TechButton = styled.span`
  display: inline-block;
  padding: 5px 10px;
  margin: 5px;
  background: #ffffff3e;
  color: ${colors.text};
  border: 1px solid ${colors.text};
  border-radius: 5px;
  font-size: 0.9rem;
  transition: background 0.3s ease, color 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${colors.text};
    color: ${colors.tech};
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 4px 8px;
  }
`;

// Componente da página de trabalhos
const WorksPageMobile = () => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMobile) return null; // Bloqueia a exibição no desktop
  
const initialProjects = [
    {
      id: 1,
      image: Pro,
      title: "Cherry Blossom - Ecommerce Digital",
      description: "Projeto de um Ecommerce Digital, feito para apresentar uma coleção de bolsas de crochê de uma cliente. O foco foi criar uma vitrine digital, intuitiva e otimizada para dispositivos móveis.",
      technologies: ["React", "SpringBoot", "MySQL", "Figma", "Firebase"],
      link: "https://cherryblossomsite.netlify.app/",
    },
    {
      id: 2,
      image: Pro2,
      title: "Site Institucional - Nutricionista",
      description: "Site institucional full stack desenvolvido e personalizado para uma nutricionista, garantindo uma presença digital profissional e acolhedora.",
      technologies: ["Vite + React", "SpringBoot", "PostgreSQL", "Figma", "PhotoshopCS6"],
      link: "https://dayanesouzanutri.netlify.app/",
    },
    {
      id: 3,
      image: Pro3,
      title: "Aéris – Robô Tutor Inteligente",
      description: "O Aeris é um assistente virtual voltado para ensino e apoio terapêutico, utilizando IA para oferecer aprendizado personalizado em idiomas, Libras, programação, ensino fundamental/médio e conhecimentos gerais, além de suporte emocional com técnicas terapêuticas.",
      technologies: ["React", "Gemini AI", "SpringBoot", "PostgreSQL"],
      link: "https://aeris-smart-robot.netlify.app/",
    },
  ];

  const additionalProjects = [
    {
      id: 4,
      image: Pro4,
      title: "Site Infoproduto",
      description: "Plataforma desenvolvida para aprimorar habilidades técnicas de UI/UX Design no Figma e Photoshop CS6. O site foi criado com WordPress e Elementor, proporcionando uma experiência dinâmica e personalizável.",
      technologies: [ "Wordpress","React", "Figma", "Photoshop", "UX/UI DESIGN"],
      link: "https://chefdeprimeira.netlify.app/",
    },
    {
      id: 5,
      image: Pro5,
      title: "Sonus – Assistente Digital para Sono Saudável",
      description: "O Sonus é um assistente digital que utiliza IA para ajudar os usuários a melhorar sua rotina de sono, criando planos personalizados e fornecendo recomendações inteligentes.",
      technologies: ["React", "SpringBoot", "Gemini AI", "PostgreSQL"],
      link: "https://sonus-interface.vercel.app/",
    },
    {
      id: 6,
      image: Pro6,
      title: "Vanguard Advocacia",
      description: "Site para advocacia, desenvolvido para aprimorar habilidades técnicas de UI/UX Design no Figma e Photoshop CS6. ",
      technologies: ["React", "Figma", "PhotoshopCS6"],
      link: "https://vanguardadv.netlify.app/",
    },
    {
          id: 7,
          image: Pro7,
          title: "Character Chronicle Caelum",
          description: "O projeto é um site baseado em um universo fictício no planeta Caelum, com personagens superdotados e suas histórias criadas pelo usuário. O 1º capítulo está pronto, e o 2º está em desenvolvimento, com aventuras, confrontos e romances entre os personagens.",
          technologies: ["React", "Tailwind", "OpenAI", "Figma"],
          link: "https://chronicle-mu.vercel.app/",
        },
        {
          id: 8,
          image: Pro8,
          title: "Rifa-Online",
          description: "O projeto foi o desenvolvimento de uma landing page para uma rifa online, oferecendo uma solução simples e eficiente para criação e gerenciamento de rifas. E que atendesse as exigências do cliente",
          technologies: ["React", "Firebase", "Material-UI"],
          link: "#",
        },
         {
          id: 9,
          image: Pro9,
          title: "APP - Farmacia",
          description: "O projeto consistiu no desenvolvimento de um app de farmácia para melhorar a experiência de atendimento ao cliente, trazendo mais flexibilidade e inovação.",
          technologies: ["React", "Firebase"],
          link: "https://farmaciapoupemaisapp.netlify.app/",
        },
  ];

  const allProjects = expanded ? [...initialProjects, ...additionalProjects] : initialProjects;

  return (
    <>
      <GlobalStyle />
      <Container id='trabalhos'>
        <Title>Trabalhos</Title>
        {allProjects.map((project) => (
          <ProjectContainer key={project.id}>
            <ImageWrapper>
              <ProjectImage src={project.image} />
              <TechStack>
                {project.technologies.map((tech, idx) => (
                  <TechButton key={idx}>{tech}</TechButton>
                ))}
              </TechStack>
            </ImageWrapper>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ButtonsContainer>
                <ProjectLink href={project.link} target='_blank'>Link do projeto</ProjectLink>
                <GitHubCodeButton href="https://github.com/seu-usuario/nutricionista" target="_blank">Código no GitHub</GitHubCodeButton>
              </ButtonsContainer>
            </ProjectContent>
          </ProjectContainer>
        ))}
        <ExpandButton onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Mostrar menos' : 'Veja mais projetos'}
        </ExpandButton>
      </Container>
    </>
  );
};

export default WorksPageMobile;
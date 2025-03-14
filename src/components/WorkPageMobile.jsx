import { useState, useEffect } from 'react';
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

import AOS from 'aos';
import 'aos/dist/aos.css';


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
    background-color: #4E74A6;
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
  font-size: 2rem;
  margin-bottom: 30px;
  padding-top: 20px;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.projectBackground};
  color: ${colors.projectText};
  margin: 20px auto;
  padding: 15px;
  border-radius: 10px;
  width: 90%;
  max-width: 1000px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin-bottom: 15px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TechStack = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 15px;
`;

const ProjectContent = styled.div`
  width: 100%;
  text-align: center;
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  margin-bottom: 15px;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const ProjectLink = styled.a`
  display: inline-block;
  padding: 8px 16px;
  background: ${colors.tech};
  color: ${colors.text};
  border-radius: 5px;
  font-size: 0.9rem;
  text-align: center;
  width: 100%;
  max-width: 300px;
  transition: background 0.3s ease;

  &:hover {
    background: #1b7fa5;
  }
`;

const TechButton = styled.span`
  display: inline-block;
  padding: 8px 16px;
  background: ${colors.tech};
  color: #00000099;
  border-radius: 5px;
  font-size: 0.9rem;
  text-align: center;
  transition: background 0.3s ease;
  border: solid 1px #00000081;
  background: #3eb4e29e;

  &:hover {
    background: #1b7ea5;
  }
`;

const ExpandButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2CA1CF;
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 10px;
  text-decoration: none;
  margin: 20px auto 0;
  width: 100%;
  max-width: 300px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #1b7fa5;
  }
`;

// Componente da página de trabalhos
const WorksPageMobile = () => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

      AOS.init({
          duration: 1000,
          once: true,
        });
    
        
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
            </ImageWrapper>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.technologies.map((tech, idx) => (
                  <TechButton key={idx}>{tech}</TechButton>
                ))}
              </TechStack>
              <ButtonsContainer>
                <ProjectLink href={project.link} target='_blank'>Link do projeto</ProjectLink>
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
import styled, { createGlobalStyle } from 'styled-components';
import Pro from "./assets/Projeto1.jpeg";
import Pro2 from "./assets/Projeto2.jpeg";
import Pro3 from "./assets/Projeto3.jpeg";

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
`;

const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    flex-direction: column;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  width: 45%;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
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
`;

const ProjectContent = styled.div`
  width: 50%;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  margin-bottom: 20px;
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
`;

const GitHubButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #2CA1CF; /* Azul principal */
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 15px 30px;
  border-radius: 10px;
  text-decoration: none;
  transition: transform 0.3s ease, background 0.3s ease;
  margin: 40px auto 0; /* Centraliza horizontalmente */
  box-shadow: 0 0 10px #2CA1CF, 0 0 20px #2CA1CF;
  width: 300px;
  text-align: center;

  &:hover {
    background: #1b7fa5; /* Tom mais escuro no hover */
    transform: scale(1.1);
    box-shadow: 0 0 15px #2CA1CF, 0 0 30px #2CA1CF;
  }
`;

const GitHubLogo = styled.img`
  width: 35px;
  height: 35px;

`;

// Componente da página de trabalhos
const WorksPage = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>TRABALHOS</Title>
        <ProjectContainer>
          <ImageWrapper>
            <ProjectImage src={Pro} />
            <TechStack>
              Tecnologias: React, Node.js, MongoDB
            </TechStack>
          </ImageWrapper>
          <ProjectContent>
            <ProjectTitle>Cherry Blossom</ProjectTitle>
            <ProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel purus at sapien ultrices tincidunt.
            </ProjectDescription>
            <ProjectLink href="https://cherryblossomsite.netlify.app/" target='_blank'>Link do projeto</ProjectLink>
          </ProjectContent>
        </ProjectContainer>
        <ProjectContainer style={{ flexDirection: 'row-reverse' }}>
          <ImageWrapper>
            <ProjectImage src={Pro2} />
            <TechStack>
              Tecnologias: Vue.js, Express, PostgreSQL
            </TechStack>
          </ImageWrapper>
          <ProjectContent>
            <ProjectTitle>Nutricionista</ProjectTitle>
            <ProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel purus at sapien ultrices tincidunt.
            </ProjectDescription>
            <ProjectLink href="#"target='_blank'>Link do projeto</ProjectLink>
          </ProjectContent>
        </ProjectContainer>
        <ProjectContainer>
          <ImageWrapper>
            <ProjectImage src={Pro3} />
            <TechStack>
              Tecnologias: React, Node.js, MongoDB
            </TechStack>
          </ImageWrapper>
          <ProjectContent>
            <ProjectTitle>Site Chef de Primeira</ProjectTitle>
            <ProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel purus at sapien ultrices tincidunt.
            </ProjectDescription>
            <ProjectLink href="#" target='_blank'>Link do projeto</ProjectLink>
          </ProjectContent>
        </ProjectContainer>
        <ProjectContainer style={{ flexDirection: 'row-reverse' }}>
          <ImageWrapper>
            <ProjectImage />
            <TechStack>
              Tecnologias: Vue.js, Express, PostgreSQL
            </TechStack>
          </ImageWrapper>
          <ProjectContent>
            <ProjectTitle>Projeto 4</ProjectTitle>
            <ProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel purus at sapien ultrices tincidunt.
            </ProjectDescription>
            <ProjectLink href="#" target='_blank'>Link do projeto</ProjectLink>
          </ProjectContent>
        </ProjectContainer>
        <GitHubButton href="https://github.com/MahFelix" target="_blank">
             <GitHubLogo src="/images/GitHub.png" alt="GitHub" />
                  Veja mais projetos
        </GitHubButton>
      </Container>
    </>
  );
};

export default WorksPage;
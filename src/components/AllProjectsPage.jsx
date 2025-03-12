import styled from 'styled-components';
import Pro from "./assets/Projeto1.jpeg";
import Pro2 from "./assets/Projeto2.jpeg";
import Pro3 from "./assets/Projeto3.jpeg";
import GlobalStyle from '../GlobalStyles';

const colors = {
  background: '#4E74A6',
  text: '#FFFFFF',
  tech: '#2CA1CF',
  projectBackground: '#FFFFFF',
  projectText: '#000000',
};

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 50px;
  color: ${colors.text};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled.div`
  background: ${colors.projectBackground};
  color: ${colors.projectText};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 20px;
  text-align: left;
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
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
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: darken(${colors.tech}, 10%);
  }
`;

const GitHubButton = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background: #2CA1CF;
  color: ${colors.text};
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 10px;
  text-decoration: none;
  margin: 40px auto;
  transition: background 0.3s ease;

  &:hover {
    background: #1b7fa5;
  }
`;

const AllProjectsPage = () => {
  return (
    <GlobalStyle>
    <Container>
      <Title>Todos os Projetos</Title>
      <ProjectsGrid>
        <ProjectCard>
          <ProjectImage src={Pro} />
          <ProjectContent>
            <ProjectTitle>Cherry Blossom</ProjectTitle>
            <ProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </ProjectDescription>
            <ProjectLink href="https://cherryblossomsite.netlify.app/" target="_blank">Link do projeto</ProjectLink>
          </ProjectContent>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src={Pro2} />
          <ProjectContent>
            <ProjectTitle>Nutricionista</ProjectTitle>
            <ProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </ProjectDescription>
            <ProjectLink href="#" target="_blank">Link do projeto</ProjectLink>
          </ProjectContent>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src={Pro3} />
          <ProjectContent>
            <ProjectTitle>Site Chef de Primeira</ProjectTitle>
            <ProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </ProjectDescription>
            <ProjectLink href="#" target="_blank">Link do projeto</ProjectLink>
          </ProjectContent>
        </ProjectCard>
        {/* Adicione mais projetos aqui */}
      </ProjectsGrid>
      <GitHubButton href="https://github.com/MahFelix" target="_blank">
        Veja mais no GitHub
      </GitHubButton>
    </Container>
    </GlobalStyle>
  );
};

export default AllProjectsPage;
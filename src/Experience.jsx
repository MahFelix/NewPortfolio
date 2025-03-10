import styled from 'styled-components';

// Definindo variáveis de cores
const colors = {
  background: '#4E74A6',
  text: '#FFFFFF',
  highlight: '#2CA1CF',
  border: 'rgba(255, 255, 255, 0.2)',
};

// Estilos globais
const GlobalStyle = styled.div`
  background-color: ${colors.background};
  color: ${colors.text};
  font-family: 'Arial', sans-serif;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40vh;

  @media (max-width: 768px) {
    padding: 20px;
    min-height: auto;
  }
`;

// Container principal
const StatsContainer = styled.div`
  display: flex;
  background-color: ${colors.highlight};
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 120vw;
  justify-content: space-around;
  text-align: start;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    align-items: center;
  
  }
`;

// Moldura para cada item
const StatsItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid ${colors.border};
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 400px;

  strong {
    font-size: 32px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    text-align: center;
    padding: 15px;

    strong {
      font-size: 24px;
    }
  }
`;

// Ícone (substitua por um ícone real ou componente de ícone)
const Icon = styled.div`
  font-size: 2rem;
  margin-right: 20px;
  color: ${colors.text};

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

// Descrição
const Description = styled.div`
  font-size: 1rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Componente principal
const ExperienceStats = () => {
  return (
    <GlobalStyle>
      <StatsContainer>
        <StatsItem>
          <Icon>📅</Icon> {/* Substitua por um ícone real */}
          <Description>
            <strong>+ 3 anos de experiência</strong><br />
            Transformando ideias em experiências digitais inovadoras e centradas no usuário.
          </Description>
        </StatsItem>

        <StatsItem>
          <Icon>📂</Icon> {/* Substitua por um ícone real */}
          <Description>
            <strong>+ 50 projetos realizados</strong><br />
            Onde cada desafio contribuiu para ampliar mais minha experiência e refinar habilidades.
          </Description>
        </StatsItem>

        <StatsItem>
          <Icon>🖌️</Icon> {/* Substitua por um ícone real */}
          <Description>
            <strong>+  18 interfaces criadas</strong><br />
            Cada detalhe pensado para oferecer interfaces funcionais e intuitivas.
          </Description>
        </StatsItem>
      </StatsContainer>
    </GlobalStyle>
  );
};

export default ExperienceStats;
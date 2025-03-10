
import styled, { keyframes } from 'styled-components';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Importando ícones

// Definindo variáveis de cores
const colors = {
  background: '#000000',
  text: '#FFFFFF',
  highlight: '#103d4e',
  border: 'rgba(255, 255, 255, 0.2)',
};

// Animação para o ponto verde piscar
const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

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
`;

// Container principal
const ContactContainer = styled.div`
  background-color: ${colors.highlight};
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  width: 100%;
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

// Coluna do texto
const TextColumn = styled.div`
  flex: 1;
  text-align: start;
`;

// Coluna da imagem
const ImageColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    display: none; /* Esconde a imagem em dispositivos móveis */
  }
`;

// Título principal com ponto verde à esquerda
const MainTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

// Ponto verde piscando
const BlinkingDot = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #00b862;
  border-radius: 50%;
  animation: ${blink} 1.5s infinite;
`;

// Subtítulo
const SubTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: normal;
`;

// Descrição
const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 30px;
`;

// Linha divisória
const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: ${colors.border};
  margin: 20px 0;
`;

// Contatos
const ContactInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

// Link de contato com ícone
const ContactLink = styled.a`
  color: ${colors.text};
  text-decoration: none;
  font-size: 1rem;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    opacity: 0.8;
  }
`;

// Rodapé
const Footer = styled.div`
  display: flex;
  font-size: 0.9rem;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

// Componente principal
const ContactSection = () => {
  return (
    <GlobalStyle>
      <ContactContainer>
        <TextColumn>
          <MainTitle>
            <BlinkingDot /> {/* Ponto verde à esquerda */}
            Disponível para novos projetos
          </MainTitle>
          <SubTitle>Vamos transformar suas ideias em realidade?</SubTitle>
          <Description>
            Com um enfoque criativo e atenção meticulosa aos detalhes, estou pronto para colaborar com você na criação de soluções digitais que não apenas encantam os usuários, mas também geram resultados tangíveis e impactantes.
          </Description>
          <Divider />
          <ContactInfo>
            <ContactLink href="https://www.linkedin.com/in/agnaldofelix/" target="_blank">
              <FaLinkedin /> LinkedIn
            </ContactLink>
            <ContactLink href="https://instagram.com" target="_blank">
              <FaInstagram /> Instagram
            </ContactLink>
            <ContactLink href="https://wa.me/+5579996848609" target="_blank">
              <FaWhatsapp /> WhatsApp
            </ContactLink>
            <ContactLink href="mailto:agnaldo12543@hotmail.com">
              <FaEnvelope /> Email
            </ContactLink>
          </ContactInfo>
          <Footer>
            © Agnaldo Felix<br />
          </Footer>
        </TextColumn>
        <ImageColumn>
          <img src="https://via.placeholder.com/400" alt="Imagem de exemplo" /> {/* Substitua pela sua imagem */}
        </ImageColumn>
      </ContactContainer>
    </GlobalStyle>
  );
};

export default ContactSection;
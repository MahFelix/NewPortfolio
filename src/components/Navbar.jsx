import styled from 'styled-components';

const colors = {
  primary: '#000000',
  text: '#2CA1CF',
  border: '#333',
};

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
    background: ${colors.text}; /* Fundo azul ao passar o mouse */
    color: ${colors.primary}; /* Texto preto ao passar o mouse */
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NavBar = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <Nav>
     <Button onClick={() => scrollToSection('inicio')}>Início</Button>
      <Button onClick={() => scrollToSection('trabalhos')}>Trabalhos</Button>
      <Button onClick={() => scrollToSection('sobre')}>Sobre</Button>
      <Button onClick={() => scrollToSection('contato')}>Contato</Button>
    </Nav>
  );
};

export default NavBar;

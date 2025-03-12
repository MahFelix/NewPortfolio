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
    background: ${({ variant }) => (variant === 'outline' ? colors.text : colors.primary)};
    color: ${({ variant }) => (variant === 'outline' ? colors.primary : colors.text)};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <Button variant="outline">Início</Button>
      <Button variant="outline">Trabalhos</Button>
      <Button variant="outline">Sobre</Button>
      <Button variant="outline">Contato</Button>
    </Nav>
  );
};

export default NavBar;

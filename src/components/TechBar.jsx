import styled, { keyframes, css } from "styled-components";
import 'aos/dist/aos.css'; // Importe o CSS do AOS


// Animação de deslize para a esquerda
const slideLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

// Animação de deslize para a direita
const slideRight = keyframes`
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
`;

// Container principal
const TechBarContainer = styled.section`
  display: flex;
  width: 100%;
  height: 40px;
  overflow: hidden;
  background-color: #2CA1CF;
  margin-top: 50px;
  padding: 20px 0;
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 8%, rgb(0, 0, 0) 92%, rgba(0, 0, 0, 0) 100%);
  overflow: hidden;
  align-items: center;


  @media (max-width: 768px) {
    padding: 10px 0;
    height: 70px;
  }
`;

// Container do slider
const TechSlider = styled.ul`
  display: flex;
  width: max-content;
  gap: 52px;
  scroll-behavior: smooth;

  animation: ${(props) =>
    props.direction === "left"
      ? css`${slideLeft} 30s linear infinite`
      : css`${slideRight} 30s linear infinite`};
      

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

// Estilo dos itens
const TechItem = styled.li`
  width: 170px;
  height: 46px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.171);
  border-radius: 99px;
  padding: 0 20px;
  border: 1px solid #ffffff9d;
  scroll-behavior: smooth;

  @media (max-width: 768px) {
    width: 120px;
    padding: 10px;
  }
`;

const TechBar = () => {
  const frontendItems = [
    { text: "React", image: "/images/React.png" },
    { text: "JavaScript", image: "/images/JavaScript.png" },
    { text: "Tailwind CSS", image: "/images/Tailwind CSS.png" },
    { text: "Sass", image: "/images/Sass.png" },
    { text: "Bootstrap", image: "/images/Bootstrap.png" },
    { text: "Figma", image: "/images/Figma.png" },
    { text: "Adobe", image: "/images/Adobe.png" },
  ];

  const backendItems = [
    { text: "Java", image: "/images/Java.png" },
    { text: "Spring", image: "/images/Spring.png" },
    { text: "Node.js", image: "/images/Node.js.png" },
    { text: "PostgreSQL", image: "/images/PostgresSQL.png" },
    { text: "MySQL", image: "/images/MySQL.png" },
    { text: "MongoDB", image: "/images/MongoDB.png" },
    { text: "Firebase", image: "/images/Firebase.png" },
    { text: "Docker", image: "/images/Docker.png" },
    { text: "Azure", image: "/images/Azure.png" },
    { text: "AWS", image: "/images/AWS.png" },
    { text: "GitHub", image: "/images/GitHub.png" },
  ];

  // Função para duplicar os itens e garantir uma animação contínua
  const duplicateItems = (items) => [...items, ...items];

  return (
    <>
      {/* TechBar para Frontend/Design (animação para a esquerda) */}
      <TechBarContainer>
        <TechSlider direction="left">
          {duplicateItems(frontendItems).map((item, index) => (
            <TechItem key={index}>
              <img src={item.image} alt='Tech-item' style={{ height: '24px', marginRight: '8px' }} />
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', fontWeight: 500, color: 'white' }}>{item.text}</p>
            </TechItem>
          ))}
        </TechSlider>
      </TechBarContainer>

      {/* TechBar para Backend/DevOps (animação para a direita) */}
      <TechBarContainer>
        <TechSlider direction="right">
          {duplicateItems(backendItems).map((item, index) => (
            <TechItem key={index}>
              <img src={item.image} alt='Tech-item' style={{ height: '24px', marginRight: '8px' }} />
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', fontWeight: 500, color: 'white' }}>{item.text}</p>
            </TechItem>
          ))}
        </TechSlider>
      </TechBarContainer>
    </>
  );
};

export default TechBar;
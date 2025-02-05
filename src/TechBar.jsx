import styled, { keyframes } from "styled-components";

// Animação de deslize
const slide = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

// Container principal
const TechBarContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background: transparent;
  border: 2px solid #2ca1cf;
  padding: 10px 0;
  display: flex;
  align-items: center;
  position: relative;
`;

// Container do slider
const TechSlider = styled.div`
  display: flex;
  gap: 30px;
  white-space: nowrap;
  animation: ${slide} 30s linear infinite;
`;

// Estilo das imagens
const TechImage = styled.img`
  height: 50px;
  filter: drop-shadow(2px 2px 5px rgba(255, 255, 255, 0.5));
`;

const TechBar = () => {
  const techs = [
    "/images/JavaScript.png",
    "/images/React.png",
    "/images/Node.js.png",
    "/images/Tailwind CSS.png",
    "/images/Sass.png",
    "/images/Bootstrap.png",
    "/images/Java.png",
    "/images/Spring.png",
    "/images/PostgresSQL.png",
    "/images/MySQL.png",
    "/images/MongoDB.png",
    "/images/Firebase.png",
    "/images/Docker.png",
    "/images/Azure.png",
    "/images/AWS.png",
    "/images/Adobe.png",
    "/images/Figma.png",
    "/images/GitHub.png",
  ];

  return (
    <TechBarContainer>
      {/* Duplicar as imagens para criar um efeito contínuo */}
      <TechSlider>
        {techs.concat(techs).map((tech, index) => (
          <TechImage key={index} src={tech} alt="Tech Logo" />
        ))}
      </TechSlider>
    </TechBarContainer>
  );
};

export default TechBar;
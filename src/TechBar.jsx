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
const TechBarContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  place-items: center;
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  opacity: 1;
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 8%, rgb(0, 0, 0) 92%, rgba(0, 0, 0, 0) 100%);
  overflow: hidden;
  background-color: #2CA1CF; // Cor de fundo
`;

// Container do slider
const TechSlider = styled.ul`
  display: flex;
  width: 100%;
  height: 120%;
  max-width: 100%;
  max-height: 100%;
  place-items: center;
  margin: 0;
  padding: 20px;
  list-style-type: none;
  text-indent: none;
  gap: 52px;
  position: relative;
  flex-direction: row;
  will-change: transform;
  animation: ${slide} 30s linear infinite;

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
 

  @media (max-width: 768px) {
    width: 120px;
    animation: ${slide} 5s linear infinite;
    padding: 10px;
  }
  
`;

const TechBar = () => {
  const items = [
    { text: "JavaScript", image: "/images/JavaScript.png" },
    { text: "React", image: "/images/React.png" },
    { text: "Node.js", image: "/images/Node.js.png" },
    { text: "Tailwind CSS", image: "/images/Tailwind CSS.png" },
    { text: "Sass", image: "/images/Sass.png" },
    { text: "Bootstrap", image: "/images/Bootstrap.png" },
    { text: "Java", image: "/images/Java.png" },
    { text: "Spring", image: "/images/Spring.png" },
    { text: "PostgreSQL", image: "/images/PostgresSQL.png" },
    { text: "MySQL", image: "/images/MySQL.png" },
    { text: "MongoDB", image: "/images/MongoDB.png" },
    { text: "Firebase", image: "/images/Firebase.png" },
    { text: "Docker", image: "/images/Docker.png" },
    { text: "Azure", image: "/images/Azure.png" },
    { text: "AWS", image: "/images/AWS.png" },
    { text: "Adobe", image: "/images/Adobe.png" },
    { text: "Figma", image: "/images/Figma.png" },
    { text: "GitHub", image: "/images/GitHub.png" },
  ];

  return (
    <TechBarContainer>
      {/* Duplicar os itens para criar um efeito contínuo */}
      <TechSlider>
        {items.concat(items).map((item, index) => (
          <TechItem key={index}>
            <img src={item.image} alt={item.text} style={{ height: '24px', marginRight: '8px' }} />
            <p style={{ fontFamily: 'DM Sans, DM Sans Placeholder, sans-serif', fontSize: '18px', fontWeight: 500, color: 'white' }}>{item.text}</p>
          </TechItem>
        ))}
      </TechSlider>
    </TechBarContainer>
  );
};

export default TechBar;
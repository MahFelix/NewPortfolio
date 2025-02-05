import styled, { keyframes } from "styled-components";

const slide = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const TechBarContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background: transparent;
  border: 2px solid #2CA1CF;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const TechSlider = styled.div`
  display: flex;
  gap: 30px;
  white-space: nowrap;
  animation: ${slide} 30s linear infinite;
`;

const TechImage = styled.img`
  height: 50px;
  filter: drop-shadow(2px 2px 5px rgba(255, 255, 255, 0.5));
`;

const TechBar = () => {
  const techs = [
    "/images/react.png",
    "/images/javascript.png",
    "/images/styled-components.png",
    "/images/node.png",
    "/images/express.png",
    "/images/mongodb.png",
    "/images/java.png"
  ];

  return (
    <TechBarContainer>
      <TechSlider>
        {techs.concat(techs).map((tech, index) => (
          <TechImage key={index} src={tech} alt="Tech Logo" />
        ))}
      </TechSlider>
    </TechBarContainer>
  );
};

export default TechBar;

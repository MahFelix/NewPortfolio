import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Cube3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Configuração da cena, câmera e renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 200 / 200, 0.1, 1000); // Ajuste para o tamanho do cubo
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(200, 200); // Tamanho do cubo
    renderer.setClearColor(0x000000, 0); // Fundo transparente

    // Adiciona o renderizador ao DOM
    mountRef.current.appendChild(renderer.domElement);

    // Criação do cubo
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x2ca1cf, transparent: true, opacity: 0.75 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Posiciona a câmera
    camera.position.z = 5;

    // Animação do cubo
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotação do cubo
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // Renderiza a cena
      renderer.render(scene, camera);
    };

    animate();

    // Limpeza ao desmontar o componente
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />;
};

export default Cube3D;
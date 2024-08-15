import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeJsBackGround = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Three.js scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    // Set canvas dimensions
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append renderer to canvas
    if (canvasRef.current) {
      canvasRef.current.appendChild(renderer.domElement);
    }

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const darkColor = 0xffffff;
    const lightColor = 0x000000;

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: document.documentElement.classList.contains('dark') ? darkColor : lightColor,
      transparent: true,
      opacity: 0.8,
    });

    function updateMaterialColor() {
      const isDarkMode = document.documentElement.classList.contains('dark');
      particlesMaterial.color.set(isDarkMode ? darkColor : lightColor);
    }

    const observer = new MutationObserver(updateMaterialColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    updateMaterialColor();

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    camera.position.z = 3;

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;
      renderer.render(scene, camera);
    }

    animate();

    return () => {
      // Cleanup
      renderer.dispose();
    };
  }, []);

  return (
    <div id="three-container" 
        className="absolute w-full h-full -z-10 top-0 left-0"
        ref={canvasRef}>
    </div>
  );
};

export default ThreeJsBackGround;

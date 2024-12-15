import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";

const BackgroundParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10" // This ensures particles stay behind content
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#1a1f2e", // Dark background color
          },
        },
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          color: {
            value: "#4B5563",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.25,
          },
          size: {
            value: 1,
            random: true,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: "#60A5FA",
            opacity: 0.15,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.3,
              },
            },
            push: {
              quantity: 4,
            },
          },
        },
      }}
    />
  );
};

export default BackgroundParticles; 
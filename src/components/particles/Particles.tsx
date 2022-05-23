import Particles from "react-tsparticles";
import type { Engine, Container } from 'tsparticles-engine';
import { loadFull } from "tsparticles";
import { useSelectTheme } from "../../hooks/useSelectTheme";
import { useState } from "react";
import { Loading } from "../loading/Loading";
import { motion } from 'framer-motion';

interface Props{
  children?: JSX.Element | JSX.Element[]
}

export const ParticlesPage = ({children}:Props) => {

  const [loading, setLoading] = useState(true)
  const particlesInit = async ( main: Engine ) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = async (container: Container)=>  {
    setLoading(false);
  };
  const { theme:{colors} } = useSelectTheme();
  
  
  return ( 
        <motion.div 
           key='particles'
           initial={{opacity:0.8}}
           animate={{opacity:1}}
           exit={{opacity:0.8}}
         > 

      {
        loading && <Loading />
      }
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          style={{
            display: loading ? 'none': ''
          }}
          options={{
            background: {
              color: {
                // value: "#0d47a1",
                value: colors.background
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {

              color: {
                // value: ['#0be779', '#008a3e', '#a3ffce'],
                value: colors.particlesColor
              },
              links: {
                color: colors.linkColor,
                distance: 200,
                enable: true,
                opacity: 0.7,
                width: 2,
              },
              collisions: {
                enable: false,
              },
              move: {

                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 1000,
                },
                value: 20,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 15, max: 45 },
              },
            },
            detectRetina: true,
          }}
        />
        {
          !loading && children
        }
        </motion.div>
        

      );
};
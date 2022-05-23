import { Outlet } from "react-router-dom";
import Navbar from "../ui/navbar/Nav";
import { useSelectTheme } from "../../hooks/useSelectTheme";
import { motion } from 'framer-motion';

import './portfolio.css';

export const Portfolio = () => {
  
  const {theme} = useSelectTheme();
  return (
    <motion.div 
      initial={{ opacity:0.8,}}
      animate={{opacity: 1}}
      exit={{opacity: 0.8}}
      className="porfolio-container"
      style={{
        backgroundColor: theme.colors.background
      }}
    >
        <Navbar/>
        <div className='mt-3'>
          <Outlet />
        </div>
    </motion.div>
  )
}

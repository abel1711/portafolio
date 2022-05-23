import { motion } from 'framer-motion';
import './loading.css';
import { useSelectTheme } from '../../hooks/useSelectTheme';
import { LoadingRect } from './LoadingRect';

export const Loading = () => {
  const {colors} = useSelectTheme().theme;
  return (
    <div 
      className="container-loading"
      style={{
        backgroundColor: colors.background
      }}
    >
      <motion.div 
        className='loading'
        style={{
          backgroundColor: colors.shadowColor,
          color: colors.text,
        }}
        whileHover={{
          scale: 1.5,
          borderRadius: '50%'
        }}
      >
        <LoadingRect />
        <h1>Loading...</h1>
      </motion.div>
    </div>
  )
}

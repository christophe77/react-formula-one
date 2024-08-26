import React, { FC } from 'react';
import { motion } from 'framer-motion';
import './Loading.css';

const Loading: FC = () => {
  return (
 
    <div className='loading-container'>
      <motion.img
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 2,
          delay: 1,
        }}
        src={process.env.PUBLIC_URL + '/assets/images/tire-red.png'}
        alt='floater'
      />
    </div>
  );
};

export default Loading;

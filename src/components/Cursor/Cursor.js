import React from 'react';
import './Cursor.scss';

import { motion } from 'framer-motion';

const Cursor = ({ cursorVariant, variants }) => {
  return (
    <motion.div
      className='cursor'
      variants={variants}
      animate={cursorVariant}
    ></motion.div>
  );
};

export default Cursor;

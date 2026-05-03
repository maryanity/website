import React from 'react';
import styles from './BentoGrid.module.css';

interface BentoGridProps {
  children: React.ReactNode;
}

const BentoGrid: React.FC<BentoGridProps> = ({ children }) => {
  return (
    <div className={styles.grid}>
      {children}
    </div>
  );
};

export default BentoGrid;

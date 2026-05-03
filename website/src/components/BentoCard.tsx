import React from 'react';
import styles from './BentoCard.module.css';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  tag?: string;
}

const BentoCard: React.FC<BentoCardProps> = ({ children, className = '', title, subtitle, tag }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      {tag && <span className={styles.tag}>{tag}</span>}
      {title && <h3 className={styles.title}>{title}</h3>}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default BentoCard;

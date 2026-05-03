import React from 'react';
import styles from './Hero.module.css';

interface HeroProps {
  name: string;
  tagline: string;
}

const Hero: React.FC<HeroProps> = ({ name, tagline }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.nameWrapper}>
        <h1 className={styles.name}>{name}</h1>
      </div>
      <p className={styles.tagline}>{tagline}</p>
      <div className={styles.organicBlob1}></div>
      <div className={styles.organicBlob2}></div>
    </section>
  );
};

export default Hero;

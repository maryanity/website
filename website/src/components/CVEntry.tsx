'use client';

import React, { useState } from 'react';
import styles from '@/app/page.module.css';

interface CVEntryProps {
  title: string;
  period: string;
  shortDetails?: string;
  longDetails?: string;
  showTLDR?: boolean;
  keywords?: string[];
}

const CVEntry: React.FC<CVEntryProps> = ({ 
  title, 
  period, 
  longDetails, 
  keywords = []
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`${styles.entry} ${isExpanded ? styles.expanded : ''}`} 
      onClick={() => setIsExpanded(!isExpanded)}
      style={{ cursor: 'pointer' }}
    >
      <div className={styles.entryHeader}>
        <h3 className={styles.role}>{title}</h3>
        <span className={styles.period}>{period}</span>
      </div>
      
      {keywords.length > 0 && (
        <div className={styles.keywords} style={{ marginBottom: isExpanded ? '0.5rem' : 0, marginTop: '0.5rem' }}>
          {keywords.join(' · ')}
        </div>
      )}
      
      {isExpanded && (
        <div className={styles.longDetails + ' animate-fade-in'}>
          {longDetails && <p>{longDetails}</p>}
        </div>
      )}
      
      <div className={styles.expandHint}>
        {isExpanded ? 'Show less' : 'Click to learn more'}
      </div>
    </div>
  );
};

export default CVEntry;

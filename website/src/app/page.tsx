import { cvData } from '@/data/cvData';
import CVEntry from '@/components/CVEntry';
import styles from './page.module.css';

export default function Home() {
  const emails = cvData.email.split(',').map(e => e.trim());

  return (
    <main className={styles.main}>
      {/* Header Section */}
      <header className={`${styles.header} animate-fade-in`}>
        <h1 className={styles.name}>{cvData.name}</h1>
        <p className={styles.tagline}>{cvData.tagline}</p>
        
        <div className={styles.contactInfo}>
          {emails.map((email, i) => (
            <span key={email}>
              <a href={`mailto:${email}`} className={styles.emailLink}>{email}</a>
              {i < emails.length - 1 && <span className={styles.dot}> · </span>}
            </span>
          ))}
        </div>
      </header>

      <nav className={styles.nav}>
        <a href="#experience" className={styles.navLink}>Current Positions</a>
        <a href="#education" className={styles.navLink}>Education</a>
        <a href="#industry" className={styles.navLink}>Industry</a>
        <a href="#research" className={styles.navLink}>Research Internships</a>
        <a href="#community" className={styles.navLink}>Arts</a>
        <a href="#languages" className={styles.navLink}>Languages</a>
        <a href="#values" className={styles.navLink}>Values</a>
        <a href="#additional" className={styles.navLink}>Additional</a>
      </nav>

      {/* Current Positions */}
      <section id="experience" className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <h2 className={styles.sectionTitle}>Current Positions</h2>
        {cvData.currentPositions.map((pos, i) => (
          <CVEntry 
            key={i}
            title={`${pos.role} @ ${pos.organization}`}
            period={pos.period}
            shortDetails={pos.details}
            longDetails={pos.longDetails}
            keywords={pos.keywords}
          />
        ))}
      </section>

      <div className="divider" />

      {/* Education */}
      <section id="education" className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h2 className={styles.sectionTitle}>Education</h2>
        {cvData.education.map((edu, i) => (
          <CVEntry 
            key={i}
            title={`${edu.degree} @ ${edu.institution}`}
            period={edu.period}
            shortDetails={`Thesis: ${edu.thesis}`}
            longDetails={edu.longDetails}
            showTLDR={false}
            keywords={edu.keywords}
          />
        ))}
      </section>

      <div className="divider" />

      {/* Industry Experience */}
      <section id="industry" className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <h2 className={styles.sectionTitle}>Industry Experience</h2>
        {cvData.industryExperience.map((exp, i) => (
          <CVEntry 
            key={i}
            title={`${exp.role} @ ${exp.organization}`}
            period={exp.period}
            shortDetails={exp.details}
            longDetails={exp.longDetails}
            keywords={exp.keywords}
          />
        ))}
      </section>

      <div className="divider" />

      {/* Research Internships */}
      <section id="research" className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <h2 className={styles.sectionTitle}>Research Internships</h2>
        {cvData.researchInternships.map((res, i) => (
          <CVEntry 
            key={i}
            title={`${res.group} @ ${res.organization}`}
            period={res.period}
            shortDetails={res.details}
            longDetails={res.longDetails}
            keywords={res.keywords}
          />
        ))}
      </section>

      <div className="divider" />

      {/* Community Arts */}
      <section id="community" className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <h2 className={styles.sectionTitle}>Arts</h2>
        {cvData.communityArts.map((art, i) => (
          <CVEntry 
            key={i}
            title={`${art.role} @ ${art.organization}`}
            period={art.period}
            shortDetails={art.details}
            longDetails={art.longDetails}
            keywords={art.keywords}
          />
        ))}
      </section>

      <div className="divider" />

      {/* Languages */}
      <section id="languages" className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <h2 className={styles.sectionTitle}>Languages</h2>
        <p className={styles.details}>
          {cvData.languages.map(l => `${l.language} (${l.level})`).join(' · ')}
        </p>
      </section>

      <div className="divider" />

      {/* Values Section */}
      <section id="values" className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
        <h2 className={styles.sectionTitle}>Values</h2>
        <div className={styles.valuesGrid}>
          {cvData.values.map((val, i) => (
            <div key={i} className={styles.valueItem}>
              <h3 className={styles.valueTitle}>{val.title}</h3>
              <p className={styles.valueDescription}>{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* Additional Experience */}
      <section id="additional" className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <h2 className={styles.sectionTitle}>Additional Experience</h2>
        {cvData.additionalExperience.map((exp, i) => (
          <CVEntry 
            key={i}
            title={`${exp.role} @ ${exp.organization}`}
            period={exp.period}
            shortDetails={exp.details}
            longDetails={exp.longDetails}
            keywords={exp.keywords}
          />
        ))}
      </section>

      <footer className={styles.footer}>
        <p>© 2026 {cvData.name}</p>
      </footer>
    </main>
  );
}

import { useState } from 'react';
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import {
  profile,
  links,
  navLinks,
  heroStats,
  heroTrust,
  heroSystems,
  expertiseHeading,
  skills,
  experienceHeading,
  jobs,
  processEyebrow,
  processSteps,
  portfolioHeading,
  portfolioFilters,
  projects,
  portfolioCta,
  modalMeta,
  contactData,
  footerData,
} from './data/siteData';

/* App — owns the page data and the modal state,
   and passes everything down to sections via props. */
export default function App() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollProgress />

      <Header profile={profile} navLinks={navLinks} links={links} />

      <main id="main" className="max-w-[1280px] mx-auto px-6 md:px-8">
        <Hero profile={profile} links={links} stats={heroStats} trust={heroTrust} systems={heroSystems} />
        <Expertise heading={expertiseHeading} skills={skills} />
        <Experience heading={experienceHeading} jobs={jobs} />
        <Process eyebrow={processEyebrow} steps={processSteps} />
        <Portfolio
          heading={portfolioHeading}
          projects={projects}
          filters={portfolioFilters}
          cta={portfolioCta}
          links={links}
          onSelect={setActiveProject}
        />
        <Contact data={contactData} links={links} />
        <Footer data={footerData} links={links} />
      </main>

      {activeProject && (
        <ProjectModal project={activeProject} meta={modalMeta} links={links} onClose={() => setActiveProject(null)} />
      )}
    </>
  );
}

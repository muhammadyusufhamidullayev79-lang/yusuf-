import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import ExperienceCard from './ExperienceCard';

/* "02 — Experience" section.
   Props: heading {eyebrow, title, titleMuted, badge}, jobs [] */
export default function Experience({ heading, jobs }) {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-white/[0.06]" aria-labelledby="exp-title">
      <SectionHeading eyebrow={heading.eyebrow} title={heading.title} titleMuted={heading.titleMuted} side={heading.badge} sideAs="div" titleId="exp-title" />

      <div className="grid lg:grid-cols-2 gap-6">
        {jobs.map((job, i) => (
          <Reveal key={job.id} delay={i % 2}>
            <ExperienceCard job={job} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

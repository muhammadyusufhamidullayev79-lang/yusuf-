import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import SkillCard from './SkillCard';

/* "01 — Core Expertise" grid.
   Props: heading {eyebrow, title, titleMuted, side}, skills [] */
export default function Expertise({ heading, skills }) {
  return (
    <section id="expertise" className="py-20 md:py-28 border-t border-white/[0.06]" aria-labelledby="expertise-title">
      <SectionHeading {...heading} titleId="expertise-title" />

      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        {skills.map((skill, i) => (
          <Reveal key={skill.id} delay={i % 2}>
            <SkillCard skill={skill} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

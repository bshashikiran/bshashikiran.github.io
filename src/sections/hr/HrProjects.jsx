import HrSectionHeader from '../../components/hr/HrSectionHeader';
import { PROJECTS } from '../../constants/projects';
import { HiOutlineCheckCircle } from 'react-icons/hi';

export default function HrProjects() {
  return (
    <section id='projects' className='py-20 px-6 max-w-6xl mx-auto'>
      <HrSectionHeader
        title='Featured Projects'
        subtitle='High-impact engineering systems, automated pipelines, and intelligent tools.'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
        {PROJECTS.map((p) => (
          <div
            key={p.id}
            id={p.id}
            className='scroll-mt-24 group flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-card/60 backdrop-blur-md border-2 border-gray-700/80 hover:border-accent/80 transition-all duration-300 shadow-xl hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-accent/10 focus:border-accent'
          >
            <div>
              {/* Title & Badge */}
              <div className='flex items-center justify-between gap-3'>
                <h3 className='text-xl sm:text-2xl font-bold text-accent tracking-tight transition-colors duration-200'>
                  {p.name}
                </h3>
              </div>

              {/* Description */}
              <p className='text-gray-300 text-sm sm:text-base mt-3 leading-relaxed'>
                {p.description}
              </p>

              {/* Tech Stack Pills */}
              <div className='flex flex-wrap gap-2 mt-5'>
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className='text-xs font-semibold px-3 py-1 rounded-lg bg-bg/80 border border-gray-800 text-gray-200 group-hover:border-gray-700 transition shadow-sm'
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className='mt-6 pt-5 border-t border-gray-800/80'>
              <p className='text-xs sm:text-sm font-semibold uppercase tracking-wider text-white mb-3'>
                Key Deliverables & Impact
              </p>
              <ul className='space-y-2.5 text-sm text-gray-300'>
                {p.highlights.map((h, i) => (
                  <li key={i} className='flex items-start gap-2.5'>
                    <HiOutlineCheckCircle className='text-accent text-base shrink-0 mt-0.5' />
                    <span className='leading-relaxed'>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

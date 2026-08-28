import { motion } from 'framer-motion';
import HrSectionHeader from '../../components/hr/HrSectionHeader';
import { EXPERIENCE } from '../../constants/experience';
import { PROJECTS } from '../../constants/projects';
import { scrollToElement } from '../../utils/scroll';
import { HiOutlineBriefcase, HiOutlineCalendar, HiOutlineArrowNarrowRight } from 'react-icons/hi';

export default function HrExperience() {
  const handleProjectClick = (projectName) => {
    const clean = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cleanTarget = clean(projectName);

    // Find direct or fuzzy matching project
    const found = PROJECTS.find((p) => {
      const cleanName = clean(p.name);
      return (
        cleanName.includes(cleanTarget) ||
        cleanTarget.includes(cleanName) ||
        clean(p.id).includes(cleanTarget) ||
        cleanTarget.includes(clean(p.id))
      );
    });

    if (found) {
      scrollToElement(found.id, 80, () => {
        // Briefly flash card border to highlight it for the user
        const card = document.getElementById(found.id);
        if (card) {
          card.classList.add('ring-2', 'ring-accent', 'scale-[1.02]');
          setTimeout(() => {
            card.classList.remove('ring-2', 'ring-accent', 'scale-[1.02]');
          }, 1500);
        }
      });
    } else {
      scrollToElement('projects', 20);
    }
  };

  return (
    <section id='experience' className='py-20 px-6 max-w-6xl mx-auto'>
      <HrSectionHeader
        title='Work Experience'
        subtitle='Professional background, engineering roles, and production systems engineered.'
      />

      <div className='space-y-8'>
        {EXPERIENCE.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className='p-6 sm:p-9 rounded-3xl bg-card/60 backdrop-blur-xl border-2 border-gray-700/80 hover:border-accent/80 transition-all duration-300 shadow-2xl hover:shadow-accent/10'
          >
            {/* Header: Role, Company, and Period */}
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-800/80 pb-6 mb-7'>
              <div className='flex items-center gap-3.5'>
                <HiOutlineBriefcase className='text-3xl text-accent shrink-0' />
                <div>
                  <h3 className='text-2xl sm:text-3xl font-extrabold text-white tracking-tight'>
                    {exp.role}
                  </h3>
                  <p className='text-base sm:text-lg font-bold text-accent mt-0.5'>
                    {exp.company}
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-2 self-start sm:self-auto'>
                <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bg/80 border border-gray-800/90 text-xs sm:text-sm font-semibold text-gray-300 shadow-inner'>
                  <HiOutlineCalendar className='text-accent text-base' />
                  {exp.period}
                </span>
              </div>
            </div>

            {/* Production Systems & Projects Delivered */}
            <div>
              <div className='flex items-center justify-between mb-4'>
                <p className='text-xs sm:text-sm font-semibold uppercase tracking-wider text-white'>
                  Key Engineering Highlights & Systems Built
                </p>
                <span className='text-[11px] text-gray-400 font-mono hidden sm:inline'>
                  Click to explore project architecture &rarr;
                </span>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3'>
                {exp.projects.map((pt, i) => (
                  <button
                    key={i}
                    onClick={() => handleProjectClick(pt)}
                    className='group flex items-center justify-between p-3.5 rounded-xl bg-bg/60 border border-gray-800/80 hover:border-accent/40 hover:bg-bg/90 transition-all duration-200 shadow-sm text-left hover:-translate-y-0.5 active:scale-98'
                  >
                    <div className='flex items-center gap-2.5 min-w-0'>
                      <span className='w-2 h-2 rounded-full bg-accent shrink-0 group-hover:scale-125 transition-transform' />
                      <span className='text-xs sm:text-sm font-medium text-gray-200 group-hover:text-white truncate'>
                        {pt}
                      </span>
                    </div>
                    <HiOutlineArrowNarrowRight className='text-gray-500 group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 text-sm shrink-0 ml-2' />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

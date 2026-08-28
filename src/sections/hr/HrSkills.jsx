import { motion } from 'framer-motion';
import HrSectionHeader from '../../components/hr/HrSectionHeader';
import { SKILLS } from '../../constants/skills';

export default function HrSkills() {
  return (
    <section id='skills' className='py-16 px-6 max-w-6xl mx-auto'>
      <HrSectionHeader
        title='Technical Skills'
        subtitle='Core technologies, frameworks, distributed databases, and development tooling I use in production.'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {SKILLS.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.06 }}
            className='p-5 sm:p-6 rounded-2xl bg-card/60 backdrop-blur-md border-2 border-gray-700/80 hover:border-accent/80 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-accent/10'
          >
            {/* Category Header */}
            <div className='flex items-center gap-2 mb-3.5 pb-2.5 border-b border-gray-800/80'>
              <span className='w-2 h-2 rounded-full bg-accent' />
              <h3 className='text-xs sm:text-sm font-bold uppercase tracking-wider text-white'>
                {group.category}
              </h3>
            </div>

            {/* Badges */}
            <div className='flex flex-wrap gap-2'>
              {group.items.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className='inline-flex items-center gap-2 bg-bg/70 hover:bg-bg border border-gray-800/90 hover:border-gray-700 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium text-gray-200 transition-all duration-200 shadow-sm hover:scale-[1.02]'
                  >
                    <Icon style={{ color: skill.color }} className='text-base shrink-0' />
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

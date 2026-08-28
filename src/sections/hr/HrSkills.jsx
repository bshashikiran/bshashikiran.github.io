import { motion } from 'framer-motion';
import HrSectionHeader from '../../components/hr/HrSectionHeader';
import { SKILLS } from '../../constants/skills';

export default function HrSkills() {
  return (
    <section id='skills' className='py-20 px-6 max-w-6xl mx-auto'>
      <HrSectionHeader
        badge='Tech Stack'
        title='Skills & Technologies'
        subtitle='Core technologies, frameworks, databases, and development tooling I use in production.'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {SKILLS.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className='p-6 rounded-2xl bg-card/60 backdrop-blur-md border border-gray-800/80 hover:border-gray-700/80 transition-all duration-300 shadow-xl flex flex-col justify-between'
          >
            <div>
              <div className='flex items-center gap-2 mb-4 pb-3 border-b border-gray-800/80'>
                <span className='w-2 h-2 rounded-full bg-accent' />
                <h3 className='text-sm sm:text-base font-bold uppercase tracking-wider text-accent'>
                  {group.category}
                </h3>
              </div>

              <div className='flex flex-wrap gap-2.5'>
                {group.items.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <span
                      key={skill.name}
                      className='inline-flex items-center gap-2.5 bg-bg/80 hover:bg-bg border border-gray-800 hover:border-gray-600 px-3.5 py-2 rounded-xl text-sm font-semibold text-gray-200 transition-all duration-150 shadow-sm hover:scale-[1.03]'
                    >
                      <Icon style={{ color: skill.color }} className='text-lg shrink-0' />
                      <span>{skill.name}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

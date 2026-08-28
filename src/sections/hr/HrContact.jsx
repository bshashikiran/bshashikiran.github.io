import { motion } from 'framer-motion';
import HrSectionHeader from '../../components/hr/HrSectionHeader';
import { SITE } from '../../constants/site';
import { HiOutlineMail, HiOutlineArrowNarrowRight } from 'react-icons/hi';

export default function HrContact() {
  return (
    <section id='contact' className='py-20 px-6 max-w-4xl mx-auto'>
      <HrSectionHeader
        badge="Get In Touch"
        title="Let's Connect"
        subtitle="I am open to discussions about software engineering roles, system architecture, and impactful collaborations."
      />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='p-8 sm:p-12 rounded-3xl bg-card/60 backdrop-blur-md border border-gray-800/80 hover:border-gray-700 transition shadow-2xl text-center space-y-6'
      >
        <div className='max-w-xl mx-auto'>
          <h3 className='text-2xl sm:text-3xl font-extrabold text-white tracking-tight'>
            Looking for a skilled backend engineer?
          </h3>
          <p className='text-gray-300 mt-3 text-base leading-relaxed'>
            Feel free to reach out directly via email or connect with me across professional networks.
          </p>
        </div>

        <div className='flex flex-wrap items-center justify-center gap-3.5 pt-4'>
          <a
            href='mailto:bolleddulashashikiran@gmail.com'
            onClick={() =>
              window.gtag?.('event', 'email_click', {
                platform: 'email',
                url: 'mailto:bolleddulashashikiran@gmail.com',
              })
            }
            className='inline-flex items-center gap-2.5 bg-accent text-bg font-bold px-7 py-3.5 rounded-xl hover:opacity-95 transition shadow-lg shadow-accent/20 hover:scale-[1.02] text-sm'
          >
            <HiOutlineMail className='text-xl' />
            <span>Send An Email</span>
            <HiOutlineArrowNarrowRight className='text-base' />
          </a>

          {SITE.social.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.name}
                href={s.url}
                target='_blank'
                rel='noreferrer'
                onClick={() =>
                  window.gtag?.('event', s.gaLabel, {
                    platform: s.name.toLowerCase(),
                    url: s.url,
                  })
                }
                className='inline-flex items-center gap-2.5 bg-bg/80 border border-gray-800 hover:border-accent hover:text-accent px-5 py-3.5 rounded-xl text-sm font-semibold text-gray-200 transition-all duration-200 shadow-sm hover:-translate-y-0.5'
              >
                <Icon className='text-accent text-lg' />
                <span>{s.name}</span>
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

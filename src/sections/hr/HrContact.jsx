import HrSectionHeader from '../../components/hr/HrSectionHeader';
import { SITE } from '../../constants/site';
import { HiOutlineMail, HiOutlineArrowNarrowRight } from 'react-icons/hi';

export default function HrContact() {
  return (
    <section id='contact' className='py-20 px-6 max-w-4xl mx-auto'>
      <HrSectionHeader
        title="Let's Connect"
        subtitle="I am open to discussions about software engineering roles, system architecture, and impactful collaborations."
      />

      <div className='p-8 sm:p-12 rounded-3xl bg-card/60 backdrop-blur-md border border-gray-800/80 hover:border-gray-700 transition shadow-2xl text-center space-y-6'>
        <div className='max-w-xl mx-auto'>
          <h3 className='text-2xl sm:text-3xl font-extrabold text-white tracking-tight'>
            Looking for a skilled backend engineer?
          </h3>
          <p className='text-gray-300 mt-3 text-base leading-relaxed'>
            Feel free to reach out directly via email or connect with me across professional networks.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-4'>
          {/* Primary CTA Button */}
          <a
            href='mailto:bolleddulashashikiran@gmail.com'
            onClick={() =>
              window.gtag?.('event', 'email_click', {
                platform: 'email',
                url: 'mailto:bolleddulashashikiran@gmail.com',
              })
            }
            aria-label='Send an Email'
            title='Send an Email'
            className='w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-bg font-bold px-7 py-3 rounded-xl hover:opacity-95 transition shadow-lg shadow-accent/20 hover:scale-[1.02] text-sm'
          >
            <HiOutlineMail className='text-xl' />
            <span>Send An Email</span>
            <HiOutlineArrowNarrowRight className='text-base' />
          </a>

          {/* Social Links Row (Below on mobile, inline on desktop) */}
          <div className='flex items-center justify-center gap-3'>
            {SITE.social.filter((s) => s.name.toLowerCase() !== 'email').map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target='_blank'
                  rel='noreferrer'
                  aria-label={s.name}
                  title={s.name}
                  onClick={() =>
                    window.gtag?.('event', s.gaLabel, {
                      platform: s.name.toLowerCase(),
                      url: s.url,
                    })
                  }
                  className='inline-flex items-center justify-center gap-2 bg-bg/80 border border-gray-800 hover:border-accent hover:text-accent p-3 sm:px-5 sm:py-3 rounded-xl text-sm font-semibold text-gray-200 transition-all duration-200 shadow-sm hover:-translate-y-0.5'
                >
                  <Icon className='text-accent text-lg shrink-0' />
                  <span className='hidden sm:inline'>{s.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

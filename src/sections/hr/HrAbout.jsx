import HrSectionHeader from '../../components/hr/HrSectionHeader';
import { ABOUT } from '../../constants/about';

export default function HrAbout() {
  return (
    <section id='about' className='py-20 px-6 max-w-5xl mx-auto'>
      <HrSectionHeader
        title='About My Work & Background'
        subtitle='Backend engineer passionate about high-concurrency systems, event-driven architectures, and clean engineering practices.'
      />

      <div className='p-6 sm:p-8 rounded-2xl bg-card/40 backdrop-blur-md border border-gray-800/80'>
        <h4 className='text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent mb-3'>
          Key Engineering Focus
        </h4>
        <div className='space-y-3.5'>
          {ABOUT.points.map((pt, i) => (
            <div key={i} className='flex items-start gap-3'>
              <span className='w-2 h-2 rounded-full bg-accent mt-2 shrink-0' />
              <p className='text-gray-200 text-sm sm:text-base leading-relaxed'>
                {pt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

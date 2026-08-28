export default function HrSectionHeader({ title, subtitle }) {
  return (
    <div className="mb-12 text-center max-w-2xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-gray-400 text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

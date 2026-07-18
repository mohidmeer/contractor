import { heroBarData } from "@/data";

const HeroBar = () => {
  return (
    <div className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 md:py-3.5">
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-3 gap-y-2.5">
          {heroBarData.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs md:text-[13px] font-medium text-white/95 text-center"
            >
              <Icon className="text-secondary shrink-0 text-sm" aria-hidden />
              <span className="leading-tight">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeroBar;

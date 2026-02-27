interface StatsGridProps {
  stats: any[];
  growthRate: string;
}

const StatsGrid = ({ stats, growthRate }: StatsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gray-50 rounded-2xl text-accent">
              {stat.icon}
            </div>
            <span className="text-[10px] text-green-500 font-bold bg-green-50 px-2 py-1 rounded-full">
              {growthRate}
            </span>
          </div>

          <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-bold">
            {stat.label}
          </p>
          <h3 className="text-3xl font-serif text-primary mt-1">
            {stat.value}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
import StatsGrid from "../assets/StatsGrid";
import PropertyCard from "../assets/PropertyCard";

const Portfolio = ({ defaults }) => {
  return (
    <div className="min-h-screen bg-[#fcfcfc] flex">
      <main className="flex-1 ">
        <StatsGrid
          stats={defaults.stats}
          growthRate={defaults.dashboard.growthRate}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {defaults.properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;

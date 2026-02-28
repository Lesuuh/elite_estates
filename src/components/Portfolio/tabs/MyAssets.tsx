import StatsGrid from "../assets/StatsGrid";
import PropertyCard from "../assets/PropertyCard";
import type { Defaults, Property } from "../../../pages/Portfolio";

const Portfolio = ({
  defaults,
  properties,
}: {
  defaults: Defaults;
  properties: Property[];
}) => {
  return (
    <div className="min-h-screen bg-[#fcfcfc] flex">
      <main className="flex-1 ">
        <StatsGrid
          stats={defaults.stats}
          growthRate={defaults.dashboard.growthRate}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {properties.map((property: Property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;

import { useParams } from "react-router-dom";
import properties from "../data";

const PropertyDetails = () => {
  const { id } = useParams();

  const property = properties.find((p) => p.id === Number(id));

  if (!property) return <p>Property not found</p>;

  return <div className="bg-primary-dark">{property.title}</div>;
};


export default PropertyDetails
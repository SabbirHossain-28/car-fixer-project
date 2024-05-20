import ServiceCard from "./ServiceCard";
import useServices from "../../Hooks/useServices";
import { useState } from "react";

const ServiceArea = () => {
  const [sort, setSort] = useState(true);

  const services = useServices(sort);

  return (
    <div className="mt-10">
      <div className="text-center space-y-2">
        <h4 className="text-xl text-[#FF3811] font-bold">Service</h4>
        <h2 className="text-4xl text-[#151515] font-bold">Our Service Area</h2>
        <p className="text-sm text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="text-center my-4">
        <button onClick={()=>setSort(!sort)} className="btn btn-warning font-mono text-white text-xl">
          {
            sort?"Price:High to Low":"Price:Low to High"
          }
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-4">
        {services.map((service, idx) => (
          <ServiceCard key={idx} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ServiceArea;

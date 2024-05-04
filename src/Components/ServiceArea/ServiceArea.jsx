import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const ServiceArea = () => {
    const [services,setServices]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res=>res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className="mt-10">
            <div className="text-center space-y-2">
                <h4 className="text-xl text-[#FF3811] font-bold">Service</h4>
                <h2 className="text-4xl text-[#151515] font-bold">Our Service Area</h2>
                <p className="text-sm text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-4">
                {
                    services.map((service,idx)=><ServiceCard key={idx} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default ServiceArea;
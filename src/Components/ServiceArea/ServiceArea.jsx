import { useEffect, useState } from "react";

const ServiceArea = () => {
    const [services,setServices]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res=>res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            {services.length}
        </div>
    );
};

export default ServiceArea;
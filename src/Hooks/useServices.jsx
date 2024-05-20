// import axios from "axios";
import { useEffect, useState } from "react";
import { axiosSecure } from "./useAxiosSecure";

const useServices = (sort) => {
    const [services,setServices]=useState([]);
    
    useEffect(()=>{
        // axios.get("https://car-fixer-server.vercel.app/services")
        // .then(res=>{
        //     setServices(res.data)
        // })
        axiosSecure(`/services?sort=${sort?"asc":"des"}`)
        .then(res => setServices(res.data))
    },[sort])
    return services;
};

export default useServices;  
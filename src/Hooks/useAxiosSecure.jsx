import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

export const axiosSecure=axios.create({
    baseURL:"http://localhost:5000",
    withCredentials:true,
})
const useAxiosSecure = () => {
    const {signOut} =useAuth();
    const navigate=useNavigate();
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res;
        },
    error=>{
        // console.log(error.response);
        // console.log("Error track by interceptor",error.response);
        if(error.response.status ===401 || error.response.status ===403){
            signOut()
            .then(()=>{
                navigate("/signin")
            })
        }
    })
    },[navigate,signOut])
    return axiosSecure
};

export default useAxiosSecure;
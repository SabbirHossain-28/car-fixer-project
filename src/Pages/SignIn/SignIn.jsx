import signinImg from "../../assets/images/login/login.svg";
import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { useContext } from "react";
import Swal from "sweetalert2";
import Navbar from "../../Shared/Header/Navbar";
import { AuthContext } from "../../AuthContextProvider/AuthContextProvider";
import axios from "axios";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const location=useLocation();
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
    .then((userCredential) => {
       const loggedInUser=userCredential.user;
       console.log(loggedInUser);
       const userInfo={email};
       axios.post("http://localhost:5000/jwt",userInfo,{withCredentials:true})
       .then(res=>{
        console.log(res.data);
        if (res.data.success) {
          console.log(userCredential.user);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "User login Successful",
            showConfirmButton: true,
          });
          form.reset();
          navigate(location?.state?location?.state:"/" ,{replace:true})
        }
       })
    })
    .then(error=>{
      console.error(error);
    })
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="flex mt-10">
        <div className="w-1/2 flex justify-center items-center">
          <img src={signinImg} alt="" />
        </div>
        <div className="w-1/2 border p-14">
          <div className="text-4xl text-[#444444] font-bold text-center mb-6">
            <h2>Sign In</h2>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-[#444444] text-xl">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border p-2 w-full"
                  placeholder="Your Email"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="pass" className="block text-[#444444] text-xl">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="pass"
                  className="border p-2 w-full"
                  placeholder="Your Password"
                />
              </div>
              <div>
                <input
                  className="w-full border bg-[#FF3811] p-2 px-3 text-xl font-semibold text-white rounded-md hover:bg-transparent hover:text-[#FF3811] hover:border-[#FF3811] hover:scale-90 transition-all duration-300"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <div className="text-center space-y-6 mt-8">
              <p className="text-xl">Or Sign Up With</p>
              <div className="flex justify-center gap-4 text-xl">
                <FaFacebook></FaFacebook>
                <FaLinkedinIn></FaLinkedinIn>
                <FaGoogle></FaGoogle>
              </div>
              <p>
                New to this site?{" "}
                <span className="link link-primary">
                  <Link to="/signup">Sign Up</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

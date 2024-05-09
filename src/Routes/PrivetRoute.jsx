import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../Hooks/useAuth";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location=useLocation();
  // console.log(location);
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/signin" replace></Navigate>;
};

PrivetRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivetRoute;

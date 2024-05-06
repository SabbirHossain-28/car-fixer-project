import { useContext } from "react";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
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
  return <Navigate to="/signin" replace></Navigate>;
};

PrivetRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivetRoute;
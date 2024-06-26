import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, signOutUser } = useAuth();

  const handleLogout = () => {
    signOutUser()
      .then(() => {})
      // .catch((error) => {
      //   console.error(error);
      // });
  };

  const navbarLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/signup">SignUp</NavLink>
      </li>
      {user?.email ? (
        <>
          <li>
            <NavLink to="/bookingOrder">Booking Orders</NavLink>
          </li>
          <li>
            <button onClick={handleLogout}>Sign out</button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/signin">Sign in</Link>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbarLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-bold gap-0">
            Car<span className="text-[#FF3811]">Fixer</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navbarLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className=" border border-[#FF3811] p-2 px-3 text-xl font-semibold text-[#FF3811] rounded-md hover:bg-[#FF3811] hover:text-white hover:scale-90 transition-all duration-300">
            Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

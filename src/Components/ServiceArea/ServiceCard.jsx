import PropTypes from "prop-types";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id,img, title, price } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="service_image" className="rounded-xl h-52" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#444444] font-bold">{title}</h2>
          <div className="card-actions flex items-center">
            <p className="text-[#FF3811] font-bold">Price:${price}</p>
            <button className="btn btn-ghost text-[#FF3811] text-xl hover:bg-[#FF3811] hover:text-white hover:scale-90">
              <Link to={`/checkout/${_id}`}>
                <FaArrowRightLong></FaArrowRightLong>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};
export default ServiceCard;

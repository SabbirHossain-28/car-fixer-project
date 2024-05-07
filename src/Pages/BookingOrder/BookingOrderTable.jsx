import PropTypes from "prop-types";

const BookingOrderTable = ({ data,handleDelete }) => {
  const { _id, customerName, date, img, total_cost, service, email } = data;

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="w-24">
          <img src={img} alt="" className="rounded" />
        </div>
      </td>
      <td>
        {customerName}
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td>{service}</td>
      <td>{total_cost}</td>
      <td>{date}</td>
      <th>
        <button className="btn bg-[#FF3811] text-white btn-xs">Pending</button>
      </th>
    </tr>
  );
};

BookingOrderTable.propTypes = {
  data: PropTypes.object,
  handleDelete:PropTypes.func,
};
export default BookingOrderTable;

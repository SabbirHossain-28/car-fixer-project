import PropTypes from "prop-types";

const BookingOrderTable = ({data}) => {
    const {customerName,date,img,total_cost,service,email}=data;

  return (
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
            <div className="w-24">
                <img
                  src={img}
                  alt=""
                  className="rounded"
                />
            </div>
        </td>
        <td>
          {customerName}
          <br />
          <span className="badge badge-ghost badge-sm">
            {email}
          </span>
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

BookingOrderTable.propTypes={
    data:PropTypes.object,
}
export default BookingOrderTable;

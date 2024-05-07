import { Link } from "react-router-dom";
import Navbar from "../../Shared/Header/Navbar";
import bannerImg from "../../assets/images/homeCarousel/3.jpg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContextProvider/AuthContextProvider";
import BookingOrderTable from "./BookingOrderTable";
import Swal from "sweetalert2";

const BookingOrder = () => {
  const { user } = useContext(AuthContext);
  const [bookingOrdersData, setBookingOrdersData] = useState([]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = bookingOrdersData.filter(
                (data) => data._id !== id
              );
              setBookingOrdersData(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
      }
    });
  };
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookingOrdersData(data));
  }, [url]);
  console.log(bookingOrdersData);
  return (
    <div className="max-w-7xl mx-auto mb-10">
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <div
          style={{ backgroundImage: `url(${bannerImg})` }}
          className="w-full h-[350px] bg-cover bg-no-repeat bg-center rounded-lg relative mt-10"
        >
          <div className="h-full w-full absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] flex items-center rounded-lg">
            <h2 className="text-5xl font-bold text-white ml-24">Check Out</h2>
          </div>
          <div className="flex justify-center items-end absolute h-full w-full">
            <div
              className="bg-[#FF3811] px-16 py-3"
              style={{
                clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <p className="text-white">
                <Link to="/">Home</Link>/Booking Orders
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mt-10 border-2 rounded">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Service Image</th>
              <th>Customer Name</th>
              <th>Service</th>
              <th>Total Cost</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookingOrdersData.map((data, idx) => (
              <BookingOrderTable
                key={idx}
                data={data}
                handleDelete={handleDelete}
              ></BookingOrderTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingOrder;

import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Header/Navbar";
import bannerImg from "../../assets/images/checkout/checkout.png";
import { useContext } from "react";
import { AuthContext } from "../../AuthContextProvider/AuthContextProvider";
import Swal from "sweetalert2";

const Checkout = () => {
  const loadedServiceData = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user);
  const { title, price, _id, img } = loadedServiceData;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName;
    const date = form.date.value;
    const email = user?.email;
    const cost = form.cost.value;
    const order = {
      customerName: name,
      email,
      date,
      total_cost: cost,
      service_id: _id,
      service: title,
      img,
    };
    console.log(order);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Order Confirm Successfully",
            showConfirmButton: true,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="max-w-7xl mx-auto mb-10">
      <div>
        <Navbar></Navbar>
      </div>
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
            style={{ clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)" }}
          >
            <p className="text-white">
              <Link to="/">Home</Link>/Checkout
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 bg-[#F3F3F3]">
        <form onSubmit={handleSubmit} className="space-y-4 p-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-medium underline">
              Your Selected Service:{" "}
              <span className="text-[#FF3811]">{title}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-[#444444] text-xl">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border p-2 w-full"
                placeholder="Your Name"
                defaultValue={user?.displayName}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="date" className="block text-[#444444] text-xl">
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="border p-2 w-full"
              />
            </div>
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
                defaultValue={user?.email}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="cost" className="block text-[#444444] text-xl">
                Total Cost
              </label>
              <input
                type="text"
                name="cost"
                id="cost"
                className="border p-2 w-full"
                // placeholder="Total Cost"
                defaultValue={"$" + price}
              />
            </div>
          </div>
          <div>
            <input
              className="w-full border bg-[#FF3811] p-2 px-3 text-xl font-semibold text-white rounded-md hover:bg-transparent hover:text-[#FF3811] hover:border-[#FF3811] hover:scale-90 transition-all duration-300"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;

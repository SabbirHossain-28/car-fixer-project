import person from "../../assets/images/about_us/person.jpg"
import parts from "../../assets/images/about_us/parts.jpg"

const AboutUs = () => {
  return (
    <div className="mt-10">
      <div className="flex gap-4 p-4">
        <div className="w-1/2 relative">
          <div className="w-3/4">
            <img className="rounded-lg" src={person} alt="" />
          </div>
          <div className="w-2/4 border-[8px] rounded-lg border-white absolute right-16 top-1/2">
            <img src={parts} alt="" />
          </div>
        </div>
        <div className="w-1/2 space-y-5">
          <h4 className="text-2xl text-[#FF3811] font-bold">About Us</h4>
          <h2 className="text-[#151515] text-4xl font-bold">
            We are qualified <br></br> & of experience<br /> in this field
          </h2>
          <p className="text-[#737373] text-sm">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.{" "}
          </p>
          <p className="text-[#737373] text-sm">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.{" "}
          </p>
          <button className=" border bg-[#FF3811] p-2 px-3 text-xl font-semibold text-white rounded-md outline-none hover:bg-white hover:text-[#FF3811] hover:border hover:border-[#FF3811] hover:scale-90 transition-all duration-300">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
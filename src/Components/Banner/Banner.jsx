import bannerImg1 from "../../assets/images/banner/1.jpg";
import bannerImg2 from "../../assets/images/banner/2.jpg";
import bannerImg3 from "../../assets/images/banner/3.jpg";
import bannerImg4 from "../../assets/images/banner/4.jpg";
import bannerImg5 from "../../assets/images/banner/5.jpg";
import bannerImg6 from "../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="mt-10">
      <div className="carousel w-full h-[600px] rounded-lg">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={bannerImg1} className="w-full" />
          <div className="absolute flex items-center w-full  h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0]">
            <div className="w-1/2 space-y-7 ml-6">
              <h2 className="text-6xl font-bold text-white">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-white text-xl">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className=" border bg-[#FF3811] p-2 px-3 text-xl font-semibold text-white rounded-md outline-none hover:bg-white hover:text-[#FF3811] hover:border hover:border-[#FF3811] hover:scale-90 transition-all duration-300">
                  Discover More
                </button>
                <button className=" border bg-transparent p-2 px-3 text-xl font-semibold text-white rounded-md outline-none hover:bg-white hover:text-[#FF3811] hover:border hover:border-[#FF3811] hover:scale-90 transition-all duration-300">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-2 transform -translate-y-1/2  right-5 bottom-0">
            <a
              href="#slide6"
              className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-none "
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={bannerImg2} className="w-full" />
          <div className="absolute flex items-center w-full  h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0]">
            <div className="w-1/2 space-y-7 ml-6">
              <h2 className="text-6xl font-bold text-white">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-white text-xl">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className=" border bg-[#FF3811] p-2 px-3 text-xl font-semibold text-white rounded-md outline-none hover:bg-white hover:text-[#FF3811] hover:border hover:border-[#FF3811] hover:scale-90 transition-all duration-300">
                  Discover More
                </button>
                <button className=" border bg-transparent p-2 px-3 text-xl font-semibold text-white rounded-md outline-none hover:bg-white hover:text-[#FF3811] hover:border hover:border-[#FF3811] hover:scale-90 transition-all duration-300">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-2 transform -translate-y-1/2  right-5 bottom-0">
            <a
              href="#slide1"
              className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-none"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={bannerImg3} className="w-full" />
          <div className="absolute flex items-center w-full  h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0]">
            <div className="w-1/2 space-y-7 ml-6">
              <h2 className="text-6xl font-bold text-white">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-white text-xl">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className=" border bg-[#FF3811] p-2 px-3 text-xl font-semibold text-white rounded-md outline-none hover:bg-white hover:text-[#FF3811] hover:border hover:border-[#FF3811] hover:scale-90 transition-all duration-300">
                  Discover More
                </button>
                <button className=" border bg-transparent p-2 px-3 text-xl font-semibold text-white rounded-md outline-none hover:bg-white hover:text-[#FF3811] hover:border hover:border-[#FF3811] hover:scale-90 transition-all duration-300">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-2 transform -translate-y-1/2  right-5 bottom-0">
            <a
              href="#slide2"
              className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-none"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={bannerImg4} className="w-full" />
          <div className="absolute flex items-center w-full  h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0]">
            <div className="w-1/2 space-y-7 ml-6">
              <h2 className="text-6xl font-bold text-white">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-white text-xl">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className=" border bg-[#FF3811] p-2 px-3 text-xl font-semibold text-white rounded-md outline-none hover:bg-white hover:text-[#FF3811] hover:border hover:border-[#FF3811] hover:scale-90 transition-all duration-300">
                  Discover More
                </button>
                <button className=" border bg-transparent p-2 px-3 text-xl font-semibold text-white rounded-md outline-none hover:bg-white hover:text-[#FF3811] hover:border hover:border-[#FF3811] hover:scale-90 transition-all duration-300">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-2 transform -translate-y-1/2  right-5 bottom-0">
            <a
              href="#slide3"
              className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-none"
            >
              ❮
            </a>
            <a
              href="#slide5"
              className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={bannerImg5} className="w-full" />
          <div className="absolute flex items-center w-full  h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0]">
            <div className="w-1/2 space-y-7 ml-6">
              <h2 className="text-6xl font-bold text-white">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-white text-xl">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className=" border bg-[#FF3811] p-2 px-3 text-xl font-semibold text-white rounded-md outline-none hover:bg-white hover:text-[#FF3811] hover:border hover:border-[#FF3811] hover:scale-90 transition-all duration-300">
                  Discover More
                </button>
                <button className=" border bg-transparent p-2 px-3 text-xl font-semibold text-white rounded-md outline-none hover:bg-white hover:text-[#FF3811] hover:border hover:border-[#FF3811] hover:scale-90 transition-all duration-300">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-2 transform -translate-y-1/2  right-5 bottom-0">
            <a
              href="#slide4"
              className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-none"
            >
              ❮
            </a>
            <a
              href="#slide6"
              className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={bannerImg6} className="w-full" />
          <div className="absolute flex items-center w-full  h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0]">
            <div className="w-1/2 space-y-7 ml-6">
              <h2 className="text-6xl font-bold text-white">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-white text-xl">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className=" border bg-[#FF3811] p-2 px-3 text-xl font-semibold text-white rounded-md outline-none hover:bg-white hover:text-[#FF3811] hover:border hover:border-[#FF3811] hover:scale-90 transition-all duration-300">
                  Discover More
                </button>
                <button className=" border bg-transparent p-2 px-3 text-xl font-semibold text-white rounded-md outline-none hover:bg-white hover:text-[#FF3811] hover:border hover:border-[#FF3811] hover:scale-90 transition-all duration-300">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-2 transform -translate-y-1/2  right-5 bottom-0">
            <a
              href="#slide5"
              className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-none"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-none"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

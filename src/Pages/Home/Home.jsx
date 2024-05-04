import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import ServiceArea from "../../Components/ServiceArea/ServiceArea";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Header/Navbar";

const Home = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <ServiceArea></ServiceArea>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
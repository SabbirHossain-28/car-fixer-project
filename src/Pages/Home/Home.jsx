import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Shared/Header/Navbar";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Home;
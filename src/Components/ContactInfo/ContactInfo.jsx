import logo1 from "../../assets/icons/calender.png";
import logo2 from "../../assets/icons/mesage.png";
import logo3 from "../../assets/icons/location.png"; 
const ContactInfo = () => {
    return (
        <div className="bg-[#151515] p-28 mt-12 rounded-lg">
            <div className="flex justify-between">
                <div className="flex justify-center items-center gap-2">
                    <img className="w-[40px] h-[40px]" src={logo1} alt="" />
                    <div>
                        <p className="text-white">We are open monday-friday</p>
                        <p className="text-white text-2xl font-bold">7:00 am - 9:00 pm</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <img className="w-[40px] h-[40px]" src={logo2} alt="" />
                    <div>
                        <p className="text-white">Have a question?</p>
                        <p className="text-white text-2xl font-bold">+2546 251 2658</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <img className="w-[40px] h-[40px]" src={logo3} alt="" />
                    <div>
                        <p className="text-white">Need a repair? our address</p>
                        <p className="text-white text-2xl font-bold">Liza Street, New York</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
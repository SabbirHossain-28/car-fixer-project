import { FaGoogle,FaInstagram,FaLinkedin,FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#151515] py-24 mt-10">
            <div className="flex max-w-7xl mx-auto justify-between">
                <div className="w-1/4 space-y-4">
                <h2 className="text-3xl text-white font-bold gap-0">Car<span className="text-[#FF3811]">Fixer</span></h2>
                <p className="text-[#E8E8E8]">Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                <div className="flex gap-2 text-xl text-white">
                    <FaGoogle></FaGoogle>
                    <FaTwitter></FaTwitter>
                    <FaInstagram></FaInstagram>
                    <FaLinkedin></FaLinkedin>
                </div>
                </div>
                <div className="text-white space-y-4">
                    <h3 className="text-lg font-bold">About</h3>
                    <div className="space-y-2">
                        <p>Home</p>
                        <p>Service</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className="text-white space-y-4">
                    <h3 className="text-lg font-bold">Company</h3>
                    <div className="space-y-2">
                        <p>Why Car Fixer</p>
                        <p>About</p>
                    </div>
                </div>
                <div className="text-white space-y-4">
                    <h3 className="text-lg font-bold">Support</h3>
                    <div className="space-y-2">
                        <p>Support Center</p>
                        <p>Foodback</p>
                        <p>Accesbility</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
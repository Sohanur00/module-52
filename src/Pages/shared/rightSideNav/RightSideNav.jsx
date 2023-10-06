import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import qZon1 from "../../../assets/qZone1.png"
import qZon2 from "../../../assets/qZone2.png"
import qZon3 from "../../../assets/qZone3.png"


const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-2xl font-bold">Login With</h2>
                <button className="btn btn-outline w-full">

                    <FaGoogle></FaGoogle>

                    Google
                </button>
                <button className="btn btn-outline w-full">

                    <FaGithub></FaGithub>

                    GitHub
                </button>
            </div>
            <div className="p-4  mb-6">
                <h2 className="text-2xl font-bold">Find us On</h2>

                <a className="flex p-4 items-center rounded-b-lg border" href="">


                    <FaFacebook className="mr-3"></FaFacebook>
                    Facebook
                </a>
                <a className="flex p-4 items-center rounded-b-lg border" href="">


                    <FaTwitter className="mr-3"></FaTwitter>
                    Twitter
                </a>
                <a className="flex p-4 items-center rounded-b-lg border" href="">


                    <FaInstagram className="mr-3"></FaInstagram>
                    Instagram
                </a>
                {/* Q zone  */}
                <div className="p-4 space-y-3 mb-6 bg-[#F3F3F3]">
                    <h2 className="text-2xl font-bold">Q-Zone</h2>

                    <img src={qZon1} alt="" />

                    <img src={qZon2} alt="" />

                    <img src={qZon3} alt="" />

                   




                </div>



            </div>
        </div>
    );
};

export default RightSideNav;
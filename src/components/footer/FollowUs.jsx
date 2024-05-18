import { FaInstagram } from "react-icons/fa"
import { FaTelegramPlane } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaGooglePlay } from "react-icons/fa"
export default function FollowUs(){
    return(
        <div className="text-white flex flex-col items-start w-[200px] mt-6 ml-5 mb-6 lg:mt-[0px] lg:mb-[0px] lg:ml-20">
            <h3 className="block ml-2 text-lg mb-4">Folow Us</h3>
            <ul className="flex items-start   text-xl [&>li]:mx-2 ">
                <li>
                    <button>
                        <FaInstagram/>
                    </button>
                </li>
                <li>
                    <button>
                     <FaTelegramPlane/>
                    </button>
                </li>
                <li>
                    <button>
                     <FaTwitter/>
                    </button>
                </li>
                <li>
                    <button>
                     <FaGooglePlay/>
                    </button>
                </li>
            </ul>
        </div>
    )

}
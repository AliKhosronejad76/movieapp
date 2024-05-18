import ActionItem from "./AcionItem"
import { FaUser } from "react-icons/fa"
import { FaBell } from "react-icons/fa"
import { FaSearch } from "react-icons/fa"

export default function Actions(){
    return(
        <div className="invisible lg:visible  flex items-center ">
            <ActionItem icon={<FaUser/>}/>
            <ActionItem icon={<FaBell/>}/>
            <ActionItem icon={<FaSearch/>}/>
        </div>
    )
}
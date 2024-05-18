import List from "./List"
import FollowUs from "./FollowUs"
export default function Footer(){
    return(
        <footer className="">
            <div className="h-[160px] bg-[#171717] flex flex-col lg:flex-row lg:items-center">
                <List/>
                <FollowUs/>
            </div>
            <div className="bg-[#070707] text-white  flex items-center justify-center py-3 ">
                <p>All Right Reserved </p>
            </div>
        </footer>
    )
}
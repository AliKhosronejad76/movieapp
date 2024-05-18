import List from "./List"

export default function Footer(){
    return(
        <footer>
            <div className="bg-[#171717] ">
                <List/>
            </div>
            <div className="bg-[#070707] text-white  flex items-center justify-center ">
                <p>All Right Reserved </p>
            </div>
        </footer>
    )
}
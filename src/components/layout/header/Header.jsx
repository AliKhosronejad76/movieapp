import Menu from "./Menu"
import Logo from "./Logo"
import Actions from "./Actions"

export default function Header(){
    return(
        <header className="bg-[#141414] h-[100px] text-white px-16 flex justify-between items-center">
              
                <div className="flex justify-start items-center h-full ">
                    <Logo/>
                    <Menu/>
                </div>
                <div className="flex items-center justify-start">
                    <Actions/>
                </div>
        </header>
    )
}
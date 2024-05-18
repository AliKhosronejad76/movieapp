import Menu from "./Menu"
import Logo from "./Logo"
import Actions from "./Actions"
import DrawerIcon from "./DrawerIcon"
export default function Header({ drawer , setDrawer }){
    return(
        <header className="bg-[#141414] h-[100px] text-white px-3 lg:px-16 flex justify-between items-center">
              
                <div className="w-[50%] lg:w-[60%] flex justify-start items-center h-full  ">
                    <Logo/>
                    <Menu/>
                </div>
                <div className="w-[50%] lg:w-[40%] flex items-center justify-end">
                    <Actions/>
                    <DrawerIcon drawer={drawer} setDrawer={setDrawer}/>
                </div>
        </header>
    )
}
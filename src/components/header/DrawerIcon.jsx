import { GiHamburgerMenu } from "react-icons/gi"
import { LiaTimesSolid } from "react-icons/lia";
export default function DrawerIcon({ drawer , setDrawer }){
    return(
        <div className="visible lg:invisible text-4xl text-white transition-all duration-800 cursor-pointer">
            {
             drawer ?  <LiaTimesSolid onClick={()=>setDrawer(false)}/>  : <GiHamburgerMenu onClick={()=>setDrawer(true)}/> 
            }
        </div>
    )
}
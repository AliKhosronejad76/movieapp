import { useState } from "react"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import Drawer from "../drawer/Drawer"

export default function Layout({children}){
    const [ drawer , setDrawer ] = useState(false)
    
    return(
        <>
         
            <div>
                <Drawer drawer={drawer} setDrawer={setDrawer}/>
            </div>
            <Header drawer={drawer} setDrawer={setDrawer}/>
             {children}
            <Footer/>
        </>
    )
}
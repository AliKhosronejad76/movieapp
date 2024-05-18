import Header from "./header/Header"
import Footer from "../footer/Footer"

export default function Layout({children}){
    return(
        <>
            <div>

            </div>
            <Header/>
             {children}
            <Footer/>
        </>
    )
}
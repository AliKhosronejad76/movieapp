import { Route , Routes } from "react-router-dom"
import HomePage from "../../pages/HomePage"

export default function Router(){
    return(
        <Routes>
            <Route index path="/" element={<HomePage/>} />
        </Routes>
    )
}
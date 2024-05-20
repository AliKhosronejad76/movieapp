import Layout from "./components/layout/Layout"
import { useGetNowPlayingQuery } from "./app/movieApi"
import { BrowserRouter } from "react-router-dom"

function App() {
    const res =   useGetNowPlayingQuery()
    console.log(res)

    return(
        <>
            <BrowserRouter>
                 <Layout>
            
                 </Layout>
            </BrowserRouter>
        </>
      
    )
}

export default App

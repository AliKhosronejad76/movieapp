import Layout from "./components/layout/Layout"
import { useGetNowPlayingQuery } from "./app/movieApi"
import { BrowserRouter } from "react-router-dom"
import Router from "./components/router/Router"


function App() {
    const res =   useGetNowPlayingQuery()
    console.log(res)

    return(
        <>
            <BrowserRouter>
                 <Layout>
                    <Router/>
                 </Layout>
            </BrowserRouter>
        </>
      
    )
}

export default App

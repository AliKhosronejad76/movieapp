import Layout from "./components/layout/Layout"
import { useGetNowPlayingQuery } from "./app/services/movieApi"

function App() {
    const re = useGetNowPlayingQuery(1)
    console.log("hello")
    return(
        <Layout>
            
        </Layout>
    )
}

export default App

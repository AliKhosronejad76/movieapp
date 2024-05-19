import Layout from "./components/layout/Layout"
import { useGetNowPlayingQuery } from "./app/movieApi"

function App() {
    const res =   useGetNowPlayingQuery()
    return(
        <Layout>
          
        </Layout>
    )
}

export default App

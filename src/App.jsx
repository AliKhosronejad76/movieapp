import Layout from "./components/layout/Layout"
import { useGetNowPlayingQuery } from "./app/movieApi"

function App() {
    const res =   useGetNowPlayingQuery()
    console.log(res)

    return(
        <Layout>
            <div className="bg-red-600 w-full">
               
            </div>
        </Layout>
    )
}

export default App

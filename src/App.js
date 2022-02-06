import { Outlet } from "react-router-dom"
import Header from "./components/header"
import Footer from './components/footer'
import './App.sass'
import './styles/typography.sass'

function App() {
    return (
        <>
        <Header />

        <div id="Container">
            <Outlet />
        </div>

        <Footer />
        </>
    )
}

export default App;

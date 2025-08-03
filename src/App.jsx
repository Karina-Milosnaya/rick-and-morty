import {HomePage} from "./pages/HomePage/HomePage.jsx";
import {CharacterPage} from "./pages/CharacterPage/CharacterPage.jsx";
import {EpisodePage} from "./pages/EpisodePage/EpisodePage.jsx";
import {LocationPage} from "./pages/LocationPage/LocationPage.jsx";
import {Header} from "./common/components/Header/Header.jsx";
import {Route, Routes} from "react-router";

function App() {
    return(
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/characters' element={<CharacterPage/>}></Route>
                <Route path='/locations' element={<LocationPage/>}></Route>
                <Route path='/episodes' element={<EpisodePage/>}></Route>
            </Routes>

        </>

    )
}

export default App
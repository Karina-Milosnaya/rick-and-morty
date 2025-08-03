import {HomePage} from "./pages/HomePage/HomePage.jsx";
import {CharacterPage} from "./pages/CharacterPage/CharacterPage.jsx";
import {EpisodePage} from "./pages/EpisodePage/EpisodePage.jsx";
import {LocationPage} from "./pages/LocationPage/LocationPage.jsx";
import {Header} from "./common/components/Header/Header.jsx";

function App() {
    return(
        <>
            <Header/>
            <HomePage/>
            <CharacterPage/>
            <LocationPage/>
            <EpisodePage/>
        </>

    )
}

export default App
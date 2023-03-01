import "./App.css";
import "./styles/main.scss";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import data from "../src/api/api.json"
import Biography from "./components/navigation/Biography";

function App() {
    return (
        <>
            {/*<Header />*/}
            {/*<Navigation />*/}
            {/*<Main />*/}
            {/*<Footer />*/}
            <Biography data={data} />
        </>
    );
}

export default App;

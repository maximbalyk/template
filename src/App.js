import "./App.css";
import "./styles/main.scss";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </>
    );
}

export default App;

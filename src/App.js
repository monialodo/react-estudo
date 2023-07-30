import Header from './components/Header';
import './App.css';
import Superior from './components/Superior';
import Banner from './components/Banner';
import QuemSomos from "./components/QuemSomos";
import OQueFazemos from "./components/QueFazemos";
import NossosTrabalhos from "./components/NossosTrabalhos";
import PacotesMidias from "./components/PacotesMidias";

function App() {
    return (
        <div>
            <Superior/>
            <Header/>
            <Banner/>
            <QuemSomos/>
            <OQueFazemos/>
            <NossosTrabalhos/>
            <PacotesMidias/>
        </div>
    );
}

export default App;

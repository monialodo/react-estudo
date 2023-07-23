import Header from './components/Header';
import './App.css';
import Superior from './components/Superior';
import Banner from './components/Banner';
import QuemSomos from "./components/Quem-somos";

function App() {
    return (
        <div>
            <Superior/>
            <Header/>
            <Banner/>
            <QuemSomos/>
        </div>
    );
}

export default App;

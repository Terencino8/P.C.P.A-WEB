import './App.css';
import { Loginbar, Navbar, Header, Pcpa} from "./components/index"
import "./css/utilis.css"

function App() {
  return (
    <main>
        <header className="header-bg">
            <div className="header-bg-nav">
                <Loginbar/>
                <Navbar/>
            </div>
            <Header/>
        </header>
        <Pcpa/>




    </main>
  );
}

export default App;

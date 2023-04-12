import './App.css';
import { Loginbar, Navbar, Header, Pcpa, Quotesection, Works, Quotesection2, Pcpablog, Footer} from "./components/index"


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
        <Quotesection/>
        <Works/>
        <Quotesection2/>
        <Pcpablog/>
        <Footer/>



    </main>
  );
}

export default App;

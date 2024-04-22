
import { FinalSection } from "./components/FinalSection";
import { Footer } from "./components/Footer";
import { MainSection } from "./components/MainSection";
import NavBar from "./components/Navbar/Navbar";
import { StartSection } from "./components/StartSection";

function App() {
  return (
    <>
    <NavBar/>
    <StartSection/>
    <MainSection/>
    <FinalSection/>
    <Footer/>
    </>
  );
}

export default App;
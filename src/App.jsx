import Customise from "./customise/Customise";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import ExpEdu from "./components/Experience/ExpEdu";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { hexToHSL } from "./utils/hexToHSL";
import forceBlueTheme from "./utils/forceBlueTheme";
import "./App.css";


// Force blue theme on app load
forceBlueTheme();

// Get saved colors but ensure they don't override our blue theme
const savedColors = null; // Completely disable custom colors for now
// Only apply saved colors if they match our blue theme
if(false){ // Disabled
  Object.entries(savedColors).forEach(([Key,value]) => {
    const cssVarName= `--${Key.replace(/([A-Z])/g,"-$1").toLowerCase()}`;
    const { h,s,l} = hexToHSL(value);
    const hslValue = `hsl(${h},${s},${l}%)`;
    document.documentElement.style.setProperty(cssVarName,hslValue);

    if(cssVarName === "--background-color"){
      document.documentElement.style.setProperty(
        "--background-color-2",
        `hsl(${h}, ${s}%, ${l+6}%)`
      );
    }
    if(cssVarName === "--text-color"){
      document.documentElement.style.setProperty(
        "--grey-color",
        `hsl(${h}, ${s}%, ${l-29}%)`
      );
    }
  });
}

const App = () => {
  return (
    <div className="app" id="app">
      {/* Skip Navigation for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <Customise/>
      <Navbar/>
      
      <main id="main-content" role="main">
        <Home/>
        <Skills/>
        <ExpEdu/>
        <Projects/>
        <Contact/>
      </main>
    </div>
  );
};

export default App;
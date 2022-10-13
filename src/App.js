import React,{useState, useEffect} from "react";
import './App.scss';
import UseState from './components/UseState';
import UseReducer from './components/UseReducer';
import UseRef from './components/UseRef';
import UseMemo from './components/UseMemo';
import UseCallback from './components/UseCallback';
import UseEffect from './components/UseEffect'
import UseContext from './components/UseContext';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [navbg,setNavbg] = useState(false)
      // function for the navbar to darken on scroll
      const changeNav = ()=>{
        if(window.scrollY >= 700){
          setNavbg(true)
        }else{
          setNavbg(false)
        }
      }
  
      window.addEventListener('scroll',changeNav)

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const navStyle = 'font-semibold text-[#678FFF] hover-underline-animation'

  return (
    <div className="App flex min-h-screen flex-col overflow-hidden scroll-smooth bg-home-back font-sans text-white">
      <nav className='fixed z-30 w-full transform-gpu transition duration-300 ease-in-out bg-bluegray-900 bg-opacity-90 shadow-lg backdrop-blur-md flex flex-row justify-between p-5'>
        <h1 className={navbg ? "poppins-reg font-semibold " : "hidden" }>React Hooks Cheatsheet</h1>
        <div className={navbg ? "w-1/2 flex justify-between invisible lg:visible" : "hidden"} >
          <a href="/reacthooks-cheatsheet/#usestate" className={navStyle}>useState</a>
          <a href="/reacthooks-cheatsheet/#usereducer" className={navStyle}>useReducer</a>
          <a href="/reacthooks-cheatsheet/#useref" className={navStyle}>useRef</a>
          <a href="/reacthooks-cheatsheet/#usememo" className={navStyle}>useMemo</a>
          <a href="/reacthooks-cheatsheet/#usecallback" className={navStyle}>useCallback</a>
          <a href="/reacthooks-cheatsheet/#useeffect" className={navStyle}>useEffect</a>
          <a href="/reacthooks-cheatsheet/#usecontext" className={navStyle}>useContext</a>
        </div>
      </nav>

      <div class="flex flex-col items-center space-y-10 px-5 md:space-y-10 pb-10">
        <Main/>
        <UseState/>
        <UseReducer/>
        <UseRef/>
        <UseMemo/>
        <UseCallback/>
        <UseEffect/>
        <UseContext/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

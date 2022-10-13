import React from "react";

const Main = () => {
     return(
        <div id="main" className="flex flex-col lg:flex-row justify-center w-full" >
            <div className="h-2 lg:w-1/2 m-auto flex flex-col justify-center text-center">
               <h2 className="text-5xl lg:text-5xl poppins-reg">React Hooks</h2>
               <h1 className="text-6xl lg:text-7xl poppins-reg">Cheatsheet</h1>
            </div>

            <div className="lg:w-1/2 lg:max-h-full h-80 rounded-3xl bg-white bg-opacity-10 purple-gradient m-auto relative mr-10 ml-5">
                <div className="absolute top-[1px] right-[2px] bottom-[2px] left-[2px] rounded-3xl bg-home-back flex p-10">
                    <div className="flex flex-wrap place-content-between xl:p-4">
                    
                        <a href="/#usestate" className="inline-flex cursor-pointer items-center space-x-2 rounded-lg border border-[#9D40D8] lg:text-xl font-semibold text-[#C364FF] transition duration-500 hover:ring hover:ring-purple-600 hover:ring-opacity-50 max-h-14 px-4 py-3 m-1">
                            <span>useState</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="20" height="22"><path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="/#usereducer" className="inline-flex cursor-pointer items-center space-x-2 rounded-lg border border-[#4A79FF] lg:text-xl font-semibold text-[#678FFF] transition duration-500 hover:ring max-h-14 px-4 py-3 m-1">
                            <span>useReducer</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="20" height="22"><path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="/#useref" className="inline-flex cursor-pointer items-center space-x-2 rounded-lg border border-[#9D40D8] lg:text-xl font-semibold text-[#C364FF] transition duration-500 hover:ring hover:ring-purple-600 hover:ring-opacity-50 max-h-14 px-4 py-3 m-1">
                            <span>useRef</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="20" height="22"><path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="/#usememo" className="inline-flex cursor-pointer items-center space-x-2 rounded-lg border border-[#4A79FF] lg:text-xl font-semibold text-[#678FFF] transition duration-500 hover:ring max-h-14 px-4 py-3 m-1">
                            <span>useMemo</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="20" height="22"><path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="/#usecallback" className="inline-flex cursor-pointer items-center space-x-2 rounded-lg border border-[#9D40D8] lg:text-xl font-semibold text-[#C364FF] transition duration-500 hover:ring hover:ring-purple-600 hover:ring-opacity-50 max-h-14 px-4 py-3 m-1">
                            <span>useCallback</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="20" height="22"><path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="/#useeffect" className="inline-flex cursor-pointer items-center space-x-2 rounded-lg border border-[#4A79FF] lg:text-xl font-semibold text-[#678FFF] transition duration-500 hover:ring max-h-14 px-4 py-3 m-1">
                            <span>useEffect</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="20" height="22"><path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="/#usecontext" className="inline-flex cursor-pointer items-center space-x-2 rounded-lg border border-[#9D40D8] lg:text-xl font-semibold text-[#C364FF] transition duration-500 hover:ring hover:ring-purple-600 hover:ring-opacity-50 max-h-14 px-4 py-3 m-1">
                            <span>useContext</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="20" height="22"><path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path></svg>
                        </a>
                   

                    </div>
                </div>
            </div>
      


        </div>

     )
}
export default Main;
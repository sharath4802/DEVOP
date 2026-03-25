import React from "react";

// useState
import Main from "./Hooks/useState/Main";

// useContext
import Fashion from "./Hooks/useContext/Fashion";
import Flipkart from "./Hooks/useContext/Flipkart";

// useEffect
import Timer from "./Hooks/useEffect/Timer";
import FetchData from "./Hooks/useEffect/FetchData";

//cricketApp
import MainCricket from "./Hooks/CricketApp/MainCricket";

function App() {
  return (
    <div>
       <h1>Cricket App</h1>

      {/* useState 
      <Main /> */}

      {/* useContext
      <Fashion>
        <Flipkart />
      </Fashion>  */}

      {/* useEffect
      <Timer />
      <FetchData /> */}
      
      {/* Cricket App */}
      <MainCricket />


      
      </div>
  );
}

export default App;
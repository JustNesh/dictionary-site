import React, { useRef, useState } from "react";
import "tachyons";
import "./App.css";
import FooterInfo from "./Components/Footer.jsx"
import SearchBar from "./Components/SearchBar.js";
import capitalizeFirstLetter from "./Functionality/capitalizeFirstLetter.js";
import DisplayData from "./Components/DisplayData.jsx";

export default function App() {
  const [searchinput, setSearchinput] = useState("");
  const [word, setWord] = useState("Fish");
  const [wordinfo, setWordinfo] = useState([]);
  const [counter, setCounter] = useState(0);
  const inputref = useRef(word);
  const [loading, setLoading] = useState(true);
  const [okResponse, setOkResponse] = useState(null);
  const [active,setActive] = useState(0);

  const enterKeyPressed = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  function inputSearchBox(event) {
    setSearchinput(event.target.value);
  }

  const searchWord = async (event) => {
    setWord(capitalizeFirstLetter(searchinput.toLowerCase()));
    setCounter((counter) => counter + 1);
    if (word) {
      await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputref.current.value}`)
        .then((response) => {
          if (!response.ok) {
            setOkResponse(false);
            setWordinfo([]);
            throw new Error(`HTTP ERROR! Status Code: ${response.status}`);
          }
          setOkResponse(true);
          return response.json();
        })
        .then((content) => {
          setWordinfo(content);
          console.log(content);
        })
        .catch((error) => {
          console.error(`Fetch Error: ${error}`);
          setOkResponse(false);
        });
      console.log(inputref.current.value);
    }
  };

  const handleLeftClick= async() => {
    const currentActive = active
    setActive((currentActive - 1))
  }

  const handleRightClick= async() =>{
    setActive(active + 1)
  }

  const activeObject = {
    "active":active, 
    "handleLeftClick":handleLeftClick, 
    "handleRightClick":handleRightClick,
    "setActive":setActive
  }


  const handleClick = async () => {
    if (inputref.current.value.length > 0){
      setLoading(true);
      await searchWord();
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div onKeyDown={enterKeyPressed} className="tc main-container">
        <h1 className="tc">English Dictionary</h1>
        <div>
          <SearchBar inputref={inputref} searchbarValue={inputSearchBox} clickFunction={handleClick} />
          <DisplayData wordinfo={wordinfo} okResponse={okResponse} counter={counter} loading={loading} word={word} activeObject={activeObject} />
        </div>
      </div>
      <FooterInfo/>
    </div>
  );
}

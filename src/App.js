import React, { useRef, useState } from "react";
import "tachyons";
import "./App.css";
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

  const handleClick = async () => {
    setLoading(true);
    await searchWord();
    setLoading(false);
  };

  return (
    <div onKeyDown={enterKeyPressed} className="tc">
      <h1 className="tc">The Dictionary Site</h1>
      <SearchBar inputref={inputref} searchbarValue={inputSearchBox} clickFunction={handleClick} />
      <DisplayData wordinfo={wordinfo} okResponse={okResponse} counter={counter} loading={loading} word={word}/>
    </div>
  );
}

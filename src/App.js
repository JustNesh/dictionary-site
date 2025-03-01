import React, {use, useRef, useState}from "react";
import "tachyons"
import "./App.css"
import SearchBar from "./SearchBar.js"
import Card from "./Components/Card.js";
export default function App() {
    const [searchinput, setSearchinput] = useState("");
    const [word, setWord] = useState("Fish")  
    const [wordinfo, setWordinfo] = useState([])
    const [content, setContent] = useState([wordinfo])
    const [counter, setCounter] = useState(0)

    const inputref = useRef(word);

    function inputSearchBox(event) {
        setSearchinput(event.target.value)
    }


    function searchWord (event){
        setWord(searchinput);
        setCounter((counter)=>counter+1)
        if (word) {
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputref.current.value}`)
            .then(response => {
              if (!response.ok){
                  setWordinfo([])
                  throw new Error(`HTTP ERROR! Status Code: ${response.status}`)
              }
             return response.json()
          })
          .then(content => setWordinfo(content)).catch(error => console.error(`Fetch Error: ${error}`))
          console.log(inputref.current.value)
        }
    }
    function WordOrEntry() {
        // console.log(counter)
        if (counter>1) {
            return (<Card wordinfo={content} word={word}></Card>)
        } else {
            return (<h2>Please input a word!</h2>)
        }
    }


    return (
        <div className="tc">
            <h1 className="tc">The Dictionary Site</h1>
            <SearchBar inputref={inputref} searchbarValue = {inputSearchBox} clickFunction={() => searchWord()}/>
            {/* <Card wordinfo={content} word={word}></Card> */}
            <WordOrEntry/>
        </div>
    )
}
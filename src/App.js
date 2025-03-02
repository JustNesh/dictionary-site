import React, {useRef, useState}from "react";
import "tachyons"
import "./App.css"
import SearchBar from "./SearchBar.js"
import Card from "./Components/Card.js";
export default function App() {
    const [searchinput, setSearchinput] = useState("");
    const [word, setWord] = useState("Fish")  
    const [wordinfo, setWordinfo] = useState([])
    // const [content, setContent] = useState([wordinfo])
    const [counter, setCounter] = useState(0)
    const inputref = useRef(word);
    // const [phoenetic,setPhoenetic] = useState("feesh");
    // const [phonetics,setPhoenetics] = useState([]);
    // const [meanings, setMeanings] = useState([]);
    const [loading, setLoading] = useState(true);


    function ProcessWordInfo({arrayobject}) {
        arrayobject.map((item) => {
            // One Key Pair
            let word = item.word

            // One Key Pair
            let phonetic = item.phonetic

            // Multiple Key Pairs (Array of Objects containing values
            // such as Text, Audio, sourceURL, & License. Ignore License.)
            let phonetics = item.phonetics

            // Mutliple Key Pairs. Contains array of objects with key pairs such as
            // partOFSpeech, Definitions. Definitions has it's own array of objects with
            // values such as definition, synonyms, and antonyms. These values can be undefined.
            let meanings = item.meanings
            return (
                <h2>{item.word}</h2>
            )
        })
    }


    function inputSearchBox(event) {
        setSearchinput(event.target.value)
    }


    const searchWord = async(event) => {
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
          .then(content => {setWordinfo(content);console.log(content)}).catch(error => console.error(`Fetch Error: ${error}`))
          console.log(inputref.current.value)
        }
    }

    const handleClick = async() => {
        setLoading(true);
        await searchWord();
        setLoading(false);
    }


    function WordOrEntry({wordinfo}) {
        // console.log(counter)
        if (counter>=1 && loading===false) {
            // return (<Card wordinfo={wordinfo} word={word}></Card>)
            return (
                wordinfo.map((item) => {
                // One Key Pair
                let word = item.word
    
                // One Key Pair
                let phonetic = item.phonetic
    
                // Multiple Key Pairs (Array of Objects containing values
                // such as Text, Audio, sourceURL, & License. Ignore License.)
                let phonetics = item.phonetics
    
                // Mutliple Key Pairs. Contains array of objects with key pairs such as
                // partOFSpeech, Definitions. Definitions has it's own array of objects with
                // values such as definition, synonyms, and antonyms. These values can be undefined.
                let meanings = item.meanings
                return (
                    <h2>{item.word}</h2>
                )
            }))
        } else if (counter>=1 && loading==true) {
            return <h2>Loading...</h2>
        }
        else {
            return (<h2>Please input a word!</h2>)
        }
    }


    return (
        <div className="tc">
            <h1 className="tc">The Dictionary Site</h1>
            <SearchBar inputref={inputref} searchbarValue = {inputSearchBox} clickFunction={() => handleClick()}/>
            {/* <Card wordinfo={wordinfo} word={word}></Card> */}
            {/* <h2>{wordinfo[0]}</h2> */}
            {/* <ProcessWordInfo arrayobject={wordinfo}/> */}
            <WordOrEntry wordinfo={wordinfo}/>
        </div>
    )
}
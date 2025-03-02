import React, {useRef, useState}from "react";
import "tachyons"
import "./App.css"
import SearchBar from "./SearchBar.js"
import Card from "./Components/Card.js";
import capitalizeFirstLetter from "./Functionality/capitalizeFirstLetter.js";
import determineAudio from "./Functionality/determineAudio.js";


export default function App() {
    const [searchinput, setSearchinput] = useState("");
    const [word, setWord] = useState("Fish");
    const [wordinfo, setWordinfo] = useState([]);
    const [counter, setCounter] = useState(0);
    const inputref = useRef(word);
    const [loading, setLoading] = useState(true);
    const [okResponse, setOkResponse] =useState(null);

    // function ProcessWordInfo({arrayobject}) {
    //     arrayobject.map((item) => {
    //         // One Key Pair
    //         let word = item.word

    //         // One Key Pair
    //         let phonetic = item.phonetic

    //         // Multiple Key Pairs (Array of Objects containing values
    //         // such as Text, Audio, sourceURL, & License. Ignore License.)
    //         let phonetics = item.phonetics

    //         // Mutliple Key Pairs. Contains array of objects with key pairs such as
    //         // partOFSpeech, Definitions. Definitions has it's own array of objects with
    //         // values such as definition, synonyms, and antonyms. These values can be undefined.
    //         let meanings = item.meanings
    //         return (
    //             <h2>{item.word + "!!!"}</h2>
    //         )
    //     })
    // }

    const enterKeyPressed = (event) =>  {
        if (event.key === 'Enter') {
            handleClick()
        }
    }


    function inputSearchBox(event) {
        setSearchinput(event.target.value)
    }


    const searchWord = async(event) => {
        setWord(capitalizeFirstLetter(searchinput.toLowerCase()));
        setCounter((counter)=>counter+1)
        if (word) {
           await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputref.current.value}`)
            .then( response => {
              if (!response.ok){
                setOkResponse(false)
                setWordinfo([])
                throw new Error(`HTTP ERROR! Status Code: ${response.status}`)
              }
            setOkResponse(true)
            return (response.json())
          })
          .then(content => {setWordinfo(content);console.log(content)}).catch(error => {console.error(`Fetch Error: ${error}`);setOkResponse(false)} )
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
        if (okResponse===true && counter>=1 && loading===false) {
            // setWord(capitalizeFirstLetter(wordinfo[0].word))
            let phonetic = wordinfo[0].phonetic
            let phonetics = wordinfo[0].phonetics
            let meanings = wordinfo[0].meanings
            let sourceURLs = wordinfo[0].sourceURLs
            // let audio = determineAudio(phonetics)
            let audio = determineAudio(phonetics)
            return (
                <div>
                    <Card word={word} phonetic={phonetic} audio={audio} meanings={meanings} sourceURLs={sourceURLs} />
                </div>             
            )
        } else if (counter>=1 && loading===true) {
            return <h2>Loading...</h2>
        } else if (okResponse === false) return <h2>Requested word is not within the dictionary!</h2>
        else {
            return (<h2>Please input a word!</h2>)
        }
    }


    return (
        <div onKeyDown={enterKeyPressed} className="tc">
            <h1 className="tc">The Dictionary Site</h1>
            <SearchBar inputref={inputref} searchbarValue = {inputSearchBox} clickFunction={() => handleClick()}/>
            {/* <Card wordinfo={wordinfo} word={word}></Card> */}
            {/* <h2>{wordinfo[0]}</h2> */}
            {/* <ProcessWordInfo arrayobject={wordinfo}/> */}
            <WordOrEntry wordinfo={wordinfo}/>
        </div>
    )
}
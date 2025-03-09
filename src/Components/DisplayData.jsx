import React, {useMemo} from "react";
import Card from "./Card";
import determineAudio from "../Functionality/determineAudio";
import DefaultBody from "./DefaultBody";
import Carousel from "./Carousel.jsx";

export default function DisplayData ({wordinfo, okResponse, counter, loading, word}) { 
    const DisplayData = useMemo(() => {
        function processData(wordinfo) {
        if (okResponse === true && counter >= 1 && loading === false) {
            let phonetic = wordinfo[0].phonetic;
            let phonetics = wordinfo[0].phonetics;
            let meanings = wordinfo[0].meanings;
            let sourceURLs = wordinfo[0].sourceURLs;
            let lowercaseWord = word.toLowerCase();
            let audio = determineAudio(phonetics, lowercaseWord);
            return (
            <div>
                <Card word={word} phonetic={phonetic} audio={audio} meanings={meanings} sourceURLs={sourceURLs} />
            </div>
            );
        } else if (counter >= 1 && loading === true) {
            return <h2>Loading...</h2>;
        } else if (okResponse === false) return <h2>Requested word is not within the dictionary!</h2>;
        else {
            return (
            <div>
                <DefaultBody />
                <Carousel />
            </div>
            )
        }
        }
        return processData(wordinfo);
    }, [wordinfo, okResponse, counter, loading, word]);
return DisplayData}
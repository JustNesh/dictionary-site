import React from "react";

//word={word} phonetic={phonetic} phonetics={phonetics} meanings={meanings} sourceURLs={sourceURLs}

export default function Card({word,phonetic,audio,meanings,sourceURLs}) {    
    return (
            <div>
                <div>
                    <h2>{word}</h2>
                    {audio&& (
                        <audio controls>
                        <source src={audio} type="audio/mpeg"/>
                        </audio>
                    )}
                </div>
                <h3>{phonetic}</h3>
            </div>
        )
}
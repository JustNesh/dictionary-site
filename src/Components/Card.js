import React from "react";
import AudioControl from "./AudioControl";
import DefinitionCarousel from "./DefinitionCarousel"
export default function Card({word,phonetic,audio,meanings,sourceURLs}) {
    return (
            <div>
                <div>
                    <h2>{word}</h2>
                    <h3>{phonetic}</h3>
                </div>
                <AudioControl audio={audio} />
                <DefinitionCarousel meanings={meanings} />
            </div>
        )
}
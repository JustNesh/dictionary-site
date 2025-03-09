import React from "react";
import AudioControl from "./AudioControl";
import DefinitionCarousel from "./DefinitionCarousel"
import GeneralSymAnt from "./GeneralSymAnt";
// import { MdOutlinePlayArrow } from "react-icons/md";

export default function Card({word,phonetic,audio,meanings,sourceURLs}) {
    return (
            <div className="larger-body-container">
                <div className="body-container">
                    <div>
                        <h2>
                            {word} 
                            {/* <span>
                                <MdOutlinePlayArrow />
                            </span>  */}
                        </h2> 
                        <h3>{phonetic}</h3>
                    </div>
                    <AudioControl audio={audio} />
                    <DefinitionCarousel meanings={meanings} />
                    <GeneralSymAnt meanings={meanings} />
                </div>
            </div>
        )
}
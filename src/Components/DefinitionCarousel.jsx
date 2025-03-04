import React from "react";
// import Carousel from "./Carousel,jsx";

export default function DefinitionCarousel({meanings}) {
        const definitions = meanings[0]
        return (
        <>
            <h4>{definitions.partOfSpeech}</h4>
            {/* <Carousel key={`definitions${idx}`}> */}
                {definitions.definitions.map((defObject,idx)=>{
                    return (
                        <div className={"definition-containter"} key={idx}>
                            <div className="definition" key={`definition${idx}`}>{`Definition #${idx + 1}: ${defObject.definition}`}</div>
                            {defObject.synonyms.length > 0 && <h4 className="synonyms" key={`synonyms${idx}`}> Synonyms: {defObject.synonyms.toString()}</h4>}
                            {defObject.antonyms.length > 0 && <h4 className="antonyms" key={`antonyms${idx}`}> Antonyms: {defObject.antonyms.toString()}</h4>}
                        </div>
                    )
                })}
            {/* </Carousel> */}
        </>)
    }
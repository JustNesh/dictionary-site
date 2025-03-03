import React from "react";

//word={word} phonetic={phonetic} phonetics={phonetics} meanings={meanings} sourceURLs={sourceURLs}
export default function Card({word,phonetic,audio,meanings,sourceURLs}) {
    // console.log(audio)
    // const AudioComponent = memo(function AudioComponent({audio}) {
    //     return (
    //         audio&& (
    //             <audio controls>
    //             <source src={audio} type="audio/mpeg"/>
    //             </audio>
    //         )
    //     )
    // },[{audio}])
    return (
            <div>
                <div>
                    <h2>{word}</h2>
                    {/* <AudioComponent audio={audio} /> */}
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
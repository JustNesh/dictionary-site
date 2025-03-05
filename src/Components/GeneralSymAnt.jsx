import React from "react";
import properlyFormatEntries from "../Functionality/properlyFormatEntries";

export default function GeneralSymAnt({meanings}) {
    let synonyms = meanings[0].synonyms
    let antonyms = meanings[0].antonyms
    // If there are any values in these arrays return true
    let synonymsBool = synonyms.length > 0 ? true : false;
    let antonymsBool = antonyms.length > 0 ? true : false;

    return (
        <div className={"GeneralSymAnt-Container"}>
            {synonymsBool && <h4 className="general-synonyms"> General Synonyms:{properlyFormatEntries(synonyms, true).toString()}</h4>}
            <br></br>
            {antonymsBool > 0 && <h4 className="general-antonyms"> General Antonyms:{properlyFormatEntries(antonyms, true).toString()}</h4>}
        </div>
    )
}
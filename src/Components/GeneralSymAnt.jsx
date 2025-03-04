import React from "react";

export default function GeneralSymAnt({meanings}) {
    let synonyms = meanings[0].synonyms
    let antonyms = meanings[0].antonyms
    // If there are any values in these arrays return true
    let synonymsBool = synonyms.length > 0 ? true : false;
    let antonymsBool = antonyms.length > 0 ? true : false;

    // function properlyFormatEntries(array) {
    //     let formattedEntries = []
    //     array.map((item,idx)=>{
    //         let firstChar = item.slice(0,1).toUpperCase();
    //         let trailChars = item.slice(1);
    //         let formatItem = " "+firstChar+trailChars;
    //         formattedEntries.push(formatItem)
    //         return true
    //     })
    //     return formattedEntries
    // }

    function properlyFormatEntries(array) {
        let formattedEntries = []
        
        array.forEach((item,idx)=>{
            let charArray = []
            let whiteSpaceItem = ` ${item}`;
            for (let i=0; i < whiteSpaceItem.length;i++) {
                console.log("The for loop is running")
                if (whiteSpaceItem[i-1] === " "){
                    console.log("Blank Space was found")
                    charArray.push(whiteSpaceItem[i].toUpperCase())
                } else {                
                console.log(`This char does not have a space: ${whiteSpaceItem[i]}`)
                charArray.push(whiteSpaceItem[i])}
            }
            let formattedEntry = charArray.join('');
            formattedEntries.push(formattedEntry);
        })
            return formattedEntries
        }

    return (
        <div className={"GeneralSymAnt-Container"}>
            {synonymsBool && <h4 className="general-synonyms"> General Synonyms:{properlyFormatEntries(synonyms).toString()}</h4>}
            <br></br>
            {antonymsBool > 0 && <h4 className="general-antonyms"> General Antonyms:{properlyFormatEntries(antonyms).toString()}</h4>}
        </div>
    )
}
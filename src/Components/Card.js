import React from "react";

export default function Card({wordInfo,word}) {
    if (word){
        return (
            <p>{wordInfo}</p>
        )
    } else {
        return <h2>Please search a word... :D</h2>
    }
        

}
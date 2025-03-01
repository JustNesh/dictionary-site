import React from "react";

export default function SearchBar({inputref, searchbarValue,clickFunction}) {
return (
    <div>
        <input className="tc" id="searchbar" ref={inputref} type="text" placeholder="Word Search..." onChange={searchbarValue}></input>
        <br/>
        <button onClick={clickFunction}>Search Word</button>
    </div>
    )
}
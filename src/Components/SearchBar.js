import React from "react";
import { IoSearch } from "react-icons/io5";


export default function SearchBar({inputref, searchbarValue,clickFunction}) {
return (
    <div>
        <input className="tc" id="searchbar" ref={inputref} type="text" placeholder="Word Search..." onChange={searchbarValue}></input>
        <IoSearch onClick={clickFunction} />
        {/* <br/>
        <button onClick={clickFunction}>Search Word</button> */}
    </div>
    )
}
import React from "react";

export default function AudioControl({audio}) {
    return (audio&& (
        <audio controls>
        <source src={audio} type="audio/mpeg"/>
        </audio>
    ))
}
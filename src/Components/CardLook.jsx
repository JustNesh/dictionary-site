import React,{useEffect} from "react";

export default function Cardlook ({definitions,activeObject}) {
    const active = activeObject.active
    useEffect(() => {if (active < 0) {activeObject.setActive(definitions.definitions.length)} else if(active > definitions.definitions.length) {activeObject.setActive(0)}},[active,definitions.definitions.length,activeObject])
    return (
        definitions.definitions.map((item,idx) => {
            return (
            <>
            <div key={idx} className={idx === activeObject.active -1? "CardLook" : "CardLook-Hidden"}>
                <h4>Definition {idx +1}</h4>
                <p>{item.definition}</p>
            </div>
            <div key={idx} className={idx === activeObject.active? "CardLook" : "CardLook-Hidden"}>
                <h4>Definition {idx +1}</h4>
                <p>{item.definition}</p>
            </div>
            <div key={idx} className={idx === activeObject.active +1? "CardLook" : "CardLook-Hidden"}>
                <h4>Definition {idx +1}</h4>
                <p>{item.definition}</p>
            </div>
            </>
            )
        })
    )
}
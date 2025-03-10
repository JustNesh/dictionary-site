import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import CardLook from "./CardLook";

export default function Carousel({definitions,activeObject}) {
//  const [active, setActive] = useState(0)

//     const handleLeftClick = async() => {
//         const currentActive = active
//         setActive((currentActive - 1))
//         console.log(active)
//     }

//     const handleRightClick = async() => {
//         setActive(active + 1)
//         console.log(active)
//     }

//     const activeObject = {
//         "active":active, 
//         "handleLeftClick":handleLeftClick, 
//         "handleRightClick":handleRightClick
//     }

    // useEffect(()=>{console.log(activeObject.active)},[activeObject.active])
    return (
        <div className="larger-container-carousel">
            <div className="container-carousel">
                <FaArrowLeft className="FaArrow" id="FaArrowLeft" onClick={activeObject.handleLeftClick}/>
                <CardLook activeObject={activeObject} definitions={definitions}/ >
                <FaArrowRight className="FaArrow" id="FaArrowRight" onClick={activeObject.handleRightClick}/>
                <div className="indicators">
                    {definitions.definitions.map((_,idx)=>{
                        return <FaCircle className={activeObject.active === idx? "indicator indicator-active":"indicator indicator-inactive"} key={idx} onClick={() =>{activeObject.setActive(idx)}}/>
                    })}
                </div>
            </div>
        </div>
    )
}
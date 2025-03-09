import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

export default function Carousel() {
    return (
        <div className="larger-container-carousel">
            <div className="container-carousel">
                <FaArrowLeft className="FaArrow" id="FaArrowLeft" />
                <div className="CardLook">
                    <h4>Definition 1</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates odio harum corporis omnis dolores natus temporibus, ducimus et a minima!</p>
                </div>
                <div className="CardLook">
                    <h4>Definition 1</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt earum, laborum quod ab veniam error neque recusandae sunt dolore fugiat.</p>
                </div>                
                <div className="CardLook">
                    <h4>Definition 1</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis reiciendis quaerat illo totam tenetur sed hic tempora quos corporis?</p>
                </div>
                <FaCircle className="FaCircle" />
                <FaArrowRight className="FaArrow" id="FaArrowRight" />
            </div>
        </div>
    )
}
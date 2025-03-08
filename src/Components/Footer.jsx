import React from "react";
import { FaGithub } from "react-icons/fa";

export default function FooterInfo() {
    return (
        // <div className="larger-footer-container">
            <div className="footer-container">
                <a href="https://github.com/JustNesh/dictionary-site" target="_blank" rel="noreferrer">
                    <FaGithub className="FaGithub" />
                </a>
                <h5 className="Justin">Justin 
                Bueno</h5>
            </div>
        // </div>
    )
}
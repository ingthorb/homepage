import React from "react";
import { Tooltip } from 'react-tooltip'
import "./Sun.css";

export default function Sun(props) {
    const { sun } = props;
    if (sun) {
        return (
            <div className="sun" data-tooltip-id="sun-tooltip" data-tooltip-content="Now in Bern the weather is Sunny. I get my information from a weather API">
                <Tooltip id="sun-tooltip" />
                <div className="ray_box">
                    <div className="ray ray1"></div>
                    <div className="ray ray2"></div>
                    <div className="ray ray3"></div>
                    <div className="ray ray4"></div>
                    <div className="ray ray5"></div>
                    <div className="ray ray6"></div>
                    <div className="ray ray7"></div>
                    <div className="ray ray8"></div>
                    <div className="ray ray9"></div>
                    <div className="ray ray10"></div>
                </div>
            </div>
        );
    }
    return null;
}

import React from "react";
import { Tooltip } from 'react-tooltip'
import "./Rain.css";

var makeItRain = function () {
    //clear out everything
    //   filter: grayscale(100%);
    // Add that filter to the image
    var increment = 0;
    let newDivArrayFront = [<div className="rain front-row"></div>];
    let newDivArrayBack = [<div className="rain back-row"></div>];
    while (increment < 100) {
        //couple random numbers to use for various randomizations
        //random number between 98 and 1
        var randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
        //random number between 5 and 2
        var randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
        //increment
        increment += randoFiver;
        //add in a new raindrop with various randomizations to certain CSS properties
        newDivArrayFront.push(
            <div
                className="drop"
                key={randoHundo}
                style={{
                    left: `${increment}%`,
                    bottom: `${randoFiver + randoFiver - 1 + 100}%`,
                    animationDelay: `0.${randoHundo}s`,
                    animationDuration: `0.5${randoHundo}s`,
                }}
            >
                <div
                    className="stem"
                    key={randoHundo - randoFiver}
                    style={{
                        animationDelay: `0.${randoHundo}s`,
                        animationDuration: `0.5${randoHundo}s`,
                    }}
                ></div>
                <div
                    className="splat"
                    style={{
                        animationDelay: `0.${randoHundo}s`,
                        animationDuration: `0.5${randoHundo}s`,
                    }}
                ></div>
            </div>
        );

        newDivArrayBack.push(
            <div
                className="drop"
                key={randoHundo}
                style={{
                    right: `${increment}%`,
                    bottom: `${randoFiver + randoFiver - 1 + 100}%`,
                    animationDelay: `0.${randoHundo}s`,
                    animationDuration: `0.5${randoHundo}s`,
                }}
            >
                <div
                    className="stem"
                    style={{
                        animationDelay: `0.{$randoHundo}s`,
                        animationDuration: `0.5${randoHundo}s`,
                    }}
                ></div>
                <div
                    key={randoHundo - randoFiver}
                    className="splat"
                    style={{
                        animationDelay: `0.${randoHundo}s`,
                        animationDuration: `0.5${randoHundo}s`,
                    }}
                ></div>
            </div>
        );
    }
    return [newDivArrayFront, newDivArrayBack];
};

export default function Rain(props) {
    const { raining } = props;
    const [rainFront, rainBack] = makeItRain();
    if (raining) {
        return (
            <div className="rainDiv" data-tooltip-id="rain-tooltip" data-tooltip-content="Now in Bern the weather is Raining. I get my information from a weather API">
                <Tooltip id="rain-tooltip" />
                <ul>
                    {rainFront.map((rainF) => {
                        return  <div key={rainF.id}>{rainF}</div>
                    })}
                </ul>
                <ul>
                    {rainBack.map((rainB) => {
                        return <div key={rainB.id}>{rainB}</div>
                    })}
                </ul>
            </div>
        );
    }
    return null;
}

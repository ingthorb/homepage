import React from "react";
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
    console.log(rainFront[0])
    if (raining) {
        return (
            <div>
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

import React from "react";

export default function ProjectArt({ art }) {
    return (
        <div className={`project-art art-${art}`} aria-hidden="true">
            {art === "deckmate" && (
                <>
                    <span className="art-caption">
                        GOOD PEOPLE. GREAT STORIES.
                    </span>
                    <div className="playing-card card-back">
                        <span>DM</span>
                        <div className="card-star">✳</div>
                    </div>
                    <div className="playing-card card-front">
                        <span>THE ADVENTURER</span>
                        <svg viewBox="0 0 140 100" fill="none">
                            <circle
                                cx="101"
                                cy="24"
                                r="14"
                                fill="currentColor"
                            />
                            <path
                                d="m0 98 47-68 28 40 19-25 46 53H0Z"
                                fill="currentColor"
                            />
                        </svg>
                        <b>
                            Your crew.
                            <br />
                            Your next story.
                        </b>
                        <span>DECKMATE / 001</span>
                    </div>
                </>
            )}
            {art === "padel" && (
                <>
                    <span className="art-caption">MAKE IT A PADEL NIGHT.</span>
                    <div className="padel-court">
                        <i />
                        <i />
                        <i />
                    </div>
                    <div className="padel-ball" />
                    <span className="art-brand">
                        padelhub<span>→</span>
                    </span>
                </>
            )}
            {art === "chess" && (
                <>
                    <span className="art-caption">
                        YOUR NEXT MOVE STARTS HERE.
                    </span>
                    <div className="chess-board" />
                    <svg
                        className="chess-piece"
                        viewBox="0 0 100 130"
                        fill="currentColor"
                    >
                        <path d="M26 108h50l5 12H21Zm7-16h36l7 11H26Zm7-46h22l7 41H33Zm-6-10h34v7H34Z" />
                        <circle cx="51" cy="22" r="14" />
                    </svg>
                    <span className="art-brand">ChessAITutor</span>
                </>
            )}
            {art === "bilabud" && (
                <>
                    <span className="art-caption">
                        SMALL SCALE. BIG ADVENTURES.
                    </span>
                    <svg
                        className="car-art"
                        viewBox="0 0 320 160"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                    >
                        <path d="M40 104V67l33-9 30-34h90l45 44 41 13v31H40Z" />
                        <path d="m101 35-20 30h137l-32-30h-85Zm-9 46h99m-38-46v30M42 92h30m182 0h25" />
                        <circle
                            cx="88"
                            cy="115"
                            r="28"
                            fill="var(--art-background)"
                        />
                        <circle
                            cx="235"
                            cy="115"
                            r="28"
                            fill="var(--art-background)"
                        />
                        <circle cx="88" cy="115" r="12" />
                        <circle cx="235" cy="115" r="12" />
                    </svg>
                    <span className="art-brand">Bílabúð.is</span>
                </>
            )}
            {art === "gluggasalan" && (
                <>
                    <span className="art-caption">A BETTER VIEW.</span>
                    <div className="window-art">
                        <i />
                        <i />
                        <i />
                        <i />
                    </div>
                    <span className="art-brand">
                        Gluggasalan<span>↗</span>
                    </span>
                </>
            )}
            {art === "travelade" && (
                <>
                    <span className="art-caption">GO A LITTLE FURTHER.</span>
                    <svg
                        className="travel-art"
                        viewBox="0 0 320 160"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="m-20 150 115-130 85 100 58-65 90 100M67 51l27 20 23-17" />
                        <circle cx="226" cy="25" r="21" />
                        <path d="M-10 130Q70 110 130 146t190-10" />
                    </svg>
                    <span className="art-brand">travelade.</span>
                </>
            )}
        </div>
    );
}

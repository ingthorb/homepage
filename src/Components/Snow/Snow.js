import React from "react";
import { Tooltip } from 'react-tooltip'
import "./Snow.css";

export default function Snow(props) {
    const { snowing } = props;
    if (snowing) {
        return (
            <div className="snowflakes" aria-hidden="true" data-tooltip-id="snow-tooltip" data-tooltip-content="Now in Bern the weather is Snowing. I get my information from a weather API">
                <Tooltip id="snow-tooltip" />
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❆</div>
                <div className="snowflake">❄</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❆</div>
                <div className="snowflake">❄</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❆</div>
                <div className="snowflake">❄</div>
                <div className="snowflake">❆</div>
                <div className="snowflake">❄</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❆</div>
                <div className="snowflake">❄</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❆</div>
                <div className="snowflake">❄</div>
            </div>
        );
    }
    return null;
}

import React from "react";

export default function Icon({ name = "arrow", className = "" }) {
    const paths = {
        arrow: (
            <>
                <path d="M5 12h14M12 5l7 7-7 7" />
            </>
        ),
        external: (
            <>
                <path d="M6 18 18 6M6 6h12v12" />
            </>
        ),
        down: (
            <>
                <path d="M12 4v16m-7-7 7 7 7-7" />
            </>
        ),
        pin: (
            <>
                <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
                <circle cx="12" cy="10" r="2" />
            </>
        ),
        code: (
            <>
                <path d="m8 5-7 7 7 7m8-14 7 7-7 7m-2-17-4 20" />
            </>
        ),
        mail: (
            <>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 6 9 7 9-7" />
            </>
        ),
        plus: <path d="M12 5v14M5 12h14" />,
        menu: <path d="M4 7h16M4 12h16M4 17h16" />,
        close: <path d="m6 6 12 12M6 18 18 6" />,
    };
    return (
        <svg
            className={`icon ${className}`}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            {paths[name] || paths.arrow}
        </svg>
    );
}

"use client"

import React from "react";

interface ViewUserButtonProp{
    userId: number
}

const ViewUserButon: React.FC<ViewUserButtonProp> = ({userId}) => {
    const handleClick = () => alert(`user id = ${userId}`);
    return (
        <>
            <button onClick={handleClick}>Lihat User</button>
        </>
    )
}

export default ViewUserButon
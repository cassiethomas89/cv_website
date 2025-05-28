'use client';
import React, { MouseEventHandler } from "react";

const headerClick = (clickEvent: string) => {
    const yOffset = 160; 
    var elmntToView = document.getElementById(clickEvent);
    const y = elmntToView!.getBoundingClientRect().top + window.scrollY - yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
    
    return undefined;
}

export default headerClick;
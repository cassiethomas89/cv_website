'use client';
import React, { MouseEventHandler } from "react";

const darkModeClick = () => {
    let darkMode = document.getElementById("darkModeDiv");
    if(darkMode?.classList.contains("darkModeOff"))
    {
        darkModeOn();
    }
    else
    {
        darkModeOff();
    }
}


const darkModeOn = () => {
    var elements = document.getElementsByClassName("sectionEvens");
    flickerClass({currentClass:"lightModeDarkest", newClass:"darkModeDarkest"});
    flickerClass({currentClass:"lightModeDark", newClass:"darkModeDark"});
    flickerClass({currentClass:"lightModeLight", newClass:"darkModeLight"});

    let darkMode = document.getElementById("darkModeDiv");
    darkMode?.classList.remove("darkModeOff");
    darkMode?.classList.add("darkModeOn");
}

const darkModeOff= () => {
    flickerClass({currentClass:"darkModeDarkest", newClass:"lightModeDarkest"});
    flickerClass({currentClass:"darkModeDark", newClass:"lightModeDark"});
    flickerClass({currentClass:"darkModeLight", newClass:"lightModeLight"});
    let darkMode = document.getElementById("darkModeDiv");
    darkMode?.classList.remove("darkModeOn");
    darkMode?.classList.add("darkModeOff");

}

const flickerClass = (props: classProps) => {
    var elements = document.getElementsByClassName(props.currentClass);
    let len = elements !== null ? elements.length : 0;
    let i = 0;
    for(i; i < len; i++) {
        elements[i].classList.add(props.newClass);
    }
    var elements = document.getElementsByClassName(props.newClass);
    i = 0;
    for(i; i < len; i++) {
        elements[i].classList.remove(props.currentClass);
    }
}

type classProps = {
    currentClass: string;
    newClass: string;
}

export default darkModeClick;
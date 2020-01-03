import React from 'react'
import PrettyNote from "./PrettyNote"

const Container = () => {
    return (<div className="container">
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div className="notepad-wrapper">
            <PrettyNote />
        </div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div></div>
    </div>);
}

export default Container;
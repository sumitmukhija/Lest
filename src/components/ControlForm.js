import React from 'react'

let ControlForm = () => {
    return (
        <form onSubmit={onFormSubmission} className= "control-form">
                <input type="text" autoComplete="off" name="intext" placeholder="Make a list.."></input>
                    <button>↑</button>
        </form>
    );
}

export default ControlForm;
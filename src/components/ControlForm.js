import React from 'react'

let ControlForm = (props) => {
    return (
        <form onSubmit={props.onFormSubmission} className= "control-form">
                <input type="text" autoComplete="off" name="intext" placeholder="Make a list.."></input>
                    <button>↑</button>
        </form>
    );
}

export default ControlForm;
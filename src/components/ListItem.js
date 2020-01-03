import React from 'react'


let ListItem = (props) => {
    return (
        <div className = "list-item">
            <input type="checkbox" id="check" checked={props.isChecked}></input>
            <label htmlFor="check">{props.content}</label>
            <button id={props.id} className='small-btn' onClick = {props.deleteATask}>⌫</button>
        </div>
    );
}

export default ListItem
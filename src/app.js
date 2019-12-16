import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from "./components/ListItem"

const rootElement = document.querySelector('.notepad-wrapper');


let list = [];

let createTaskAndAddToTheList = (item) => {
    let creationDate = new Date();
    let task = {
        content: item.trim(),
        createdAt: creationDate,
        id: creationDate,
        isChecked: false
    }
    list.push(task);
}

const getList = () => {
    return list.map((task) => { 
        return <ListItem content={task.content} key={task.id} createdAt={task.createdAt}/>
    });
}

const onFormSubmission = (e) => {
    e.preventDefault();
    const item = e.target.elements.intext.value;
    if (item) {
        createTaskAndAddToTheList(item)
        e.target.elements.intext.value = ""
    }
    render();
}

const render = () => {
    const listComponent = (
        <div className="notepad card">
            <div className="list-area">
                    {getList()}
            </div>
            <form onSubmit={onFormSubmission} className= "control-form">
                <input type="text" autoComplete="off" name="intext" placeholder="Make a list.."></input>
                <div className="sep">&nbsp;&nbsp;&nbsp;</div>
                    <button>↑</button>
            </form>
        </div>
    );
    
    ReactDOM.render(listComponent, rootElement);    
}

render();


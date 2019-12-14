const rootElement = document.querySelector('.notepad-wrapper');


let list = [];

let createTaskAndAddToTheList = (item) => {
    let task = {
        content: item,
        createdAt: new Date(),
        id: (item.length + Math.random),
        isChecked: false
    }
    list.push(task);
}

let ListItem = (props) => {
    return (
        <div className = "list-item">
            <input type="checkbox" id="check" checked={props.isChecked}></input>
            <label htmlFor="check">{props.content}</label>
            <button className='small-btn'>⌫</button>
        </div>
    );
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
            <div></div>
                <form onSubmit={onFormSubmission} className= "control-form">
                <input type="text" autocomplete="off" name="intext" placeholder = "Make a list.."></input>
                    <div></div>
                    <button>↑</button>
                    </form>
        </div>
    );
    
    ReactDOM.render(listComponent, rootElement);    
}

render();


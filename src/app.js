const rootElement = document.querySelector('.notepad-wrapper');



let list = [];


const getList = () => {
    return list.map((item) => { 
        return <li>{item}</li>
    });
}

const onFormSubmission = (e) => {
    e.preventDefault();
    const item = e.target.elements.intext.value;
    if (item) {
        list.push(item);
        e.target.elements.intext.value = ""
    }
    render();
}

const render = () => {
    const listComponent = (
        <div className="notepad card">
            <div className="list-area">
                <ul>
                    {getList()}
                </ul>
            </div>
            <div></div>
                <form onSubmit={onFormSubmission} className= "control-form">
                    <input type="text" name="intext"></input>
                    <div></div>
                    <button>↑</button>
                    </form>
        </div>
    );
    
    ReactDOM.render(listComponent, rootElement);    
}

render();


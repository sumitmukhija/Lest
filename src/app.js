const rootElement = document.querySelector('.container');



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
            <div className="control-area">
                <form onSubmit={onFormSubmission}>
                    <input type="text" name="intext"></input>
                        <button>↑</button>
                    </form>
                </div>
            </div>
    );
    
    ReactDOM.render(listComponent, rootElement);    
}

render();


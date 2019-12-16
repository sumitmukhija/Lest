import React from 'react'
import ListItem from "./ListItem"
import ControlForm from "./ControlForm"
import ListArea from "./ListArea"

export default class PrettyNote extends React.Component{

    constructor(props) {
        super(props);
        this.createTaskAndAddToTheList = this.createTaskAndAddToTheList.bind(this);
        this.onFormSubmission = this.onFormSubmission.bind(this);
        this.getList = this.getList.bind(this);
        this.state = {
            list: []
        }
    }

    deleteATask(item) {
        console.log(item);
    }

    createTaskAndAddToTheList(item){
        let creationDate = new Date();
        let task = {
            content: item.trim(),
            createdAt: creationDate,
            id: creationDate,
            isChecked: false
        }
        let list = this.state.list;
        list.push(task);
        this.setState(() => {
            return {
                list: list
            }
        });
    }

    onFormSubmission(e){
        e.preventDefault();
        const item = e.target.elements.intext.value;
        if (item) {
            this.createTaskAndAddToTheList(item)
            e.target.elements.intext.value = ""
        }
    }

    getList(){
        return this.state.list.map((task) => { 
            return <ListItem content={task.content} key={task.id} createdAt={task.createdAt}/>
        });
    }

    render() {
        return (
            <div className="notepad card">
                <ListArea getList={this.getList}/>
                <ControlForm onFormSubmission={this.onFormSubmission}/>
        </div>
        );
    }

}

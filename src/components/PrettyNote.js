import React from 'react'
import ListItem from "./ListItem"
import ControlForm from "./ControlForm"
import ListArea from "./ListArea"
import uuid from "uuid";

export default class PrettyNote extends React.Component{

    constructor(props) {
        super(props);
        this.createTaskAndAddToTheList = this.createTaskAndAddToTheList.bind(this);
        this.onFormSubmission = this.onFormSubmission.bind(this);
        this.getList = this.getList.bind(this);
        this.deleteATask = this.deleteATask.bind(this);
        this.state = {
            list: []
        }
    }

    deleteATask(e) {
        let targetId = e.target.id;
        let list = this.state.list.filter((e) => {
            return e.id !== targetId;
        });
        localStorage.setItem("list", JSON.stringify(list));
        this.setState(() => {
            return {
                list
            }
        });
    }

    createTaskAndAddToTheList(item){
        let creationDate = new Date();
        let task = {
            content: item.trim(),
            createdAt: creationDate,
            id: uuid(),
            isChecked: false
        }
        let list = this.state.list;
        list.push(task);
        localStorage.setItem("list", JSON.stringify(list));
        this.setState(() => {
            return {
                list: list
            }
        });
    }

    componentWillMount() {
        let list = JSON.parse(localStorage.getItem("list"));
        if (list) {
            this.setState(() => {
                return {
                    list
                }
            });
        }
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
            return <ListItem content={task.content} id={task.id} key={task.id} createdAt={task.createdAt} deleteATask={this.deleteATask}/>
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

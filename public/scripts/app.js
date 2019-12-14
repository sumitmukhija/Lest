"use strict";

var rootElement = document.querySelector('.notepad-wrapper');

var list = [];

var createTaskAndAddToTheList = function createTaskAndAddToTheList(item) {
    var task = {
        content: item.trim(),
        createdAt: new Date(),
        id: item.length + Math.random,
        isChecked: false
    };
    list.push(task);
};

var ListItem = function ListItem(props) {
    return React.createElement(
        "div",
        { className: "list-item" },
        React.createElement("input", { type: "checkbox", id: "check", checked: props.isChecked }),
        React.createElement(
            "label",
            { htmlFor: "check" },
            props.content
        ),
        React.createElement(
            "button",
            { className: "small-btn" },
            "\u232B"
        )
    );
};

var getList = function getList() {
    return list.map(function (task) {
        return React.createElement(ListItem, { content: task.content, key: task.id, createdAt: task.createdAt });
    });
};

var onFormSubmission = function onFormSubmission(e) {
    e.preventDefault();
    var item = e.target.elements.intext.value;
    if (item) {
        createTaskAndAddToTheList(item);
        e.target.elements.intext.value = "";
    }
    render();
};

var render = function render() {
    var listComponent = React.createElement(
        "div",
        { className: "notepad card" },
        React.createElement(
            "div",
            { className: "list-area" },
            getList()
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmission, className: "control-form" },
            React.createElement("input", { type: "text", autoComplete: "off", name: "intext", placeholder: "Make a list.." }),
            React.createElement("div", null),
            React.createElement(
                "button",
                null,
                "\u2191"
            )
        )
    );

    ReactDOM.render(listComponent, rootElement);
};

render();

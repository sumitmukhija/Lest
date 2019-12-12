"use strict";

var rootElement = document.querySelector('.container');

var list = [];

var getList = function getList() {
    return list.map(function (item) {
        return React.createElement(
            "li",
            null,
            item
        );
    });
};

var onFormSubmission = function onFormSubmission(e) {
    e.preventDefault();
    var item = e.target.elements.intext.value;
    if (item) {
        list.push(item);
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
            React.createElement(
                "ul",
                null,
                getList()
            )
        ),
        React.createElement(
            "div",
            { className: "control-area" },
            React.createElement(
                "form",
                { onSubmit: onFormSubmission, className: "control-form" },
                React.createElement("input", { type: "text", name: "intext" }),
                React.createElement("div", null),
                React.createElement(
                    "button",
                    null,
                    "\u2191"
                )
            )
        )
    );

    ReactDOM.render(listComponent, rootElement);
};

render();

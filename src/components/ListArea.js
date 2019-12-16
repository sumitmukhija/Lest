import React from 'react'

const ListArea = (props) => {
    return (<div className="list-area">
        {props.getList()}
    </div>);
}

export default ListArea;
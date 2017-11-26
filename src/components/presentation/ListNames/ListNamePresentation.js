import React, { Component } from 'react';


let maxlength="25";
/*className={id === lastAddedListId ? 'listName listName--lastAdded' : 'listName'}*/



/*const ListNamePresentation = ({ onChange, name, id, selectedListId, onClick }) => (

    <li className="li"><input className={id === selectedListId ? "listName listName--lastSelected" : "listName"} maxlength={maxlength} value={name} onChange={onChange} onClick={onClick}/></li>


);*/

class ListNamePresentation extends Component {



    render() {

        var correctClass = this.props.isSelected ?  "listName listName--lastSelected" : "listName";

        return (
            <li className="li"><input className={correctClass} maxlength={maxlength} value={this.props.name} onChange={this.props.onChange} onClick={this.props.onClick}/></li>

        );
    }



}



export default ListNamePresentation;
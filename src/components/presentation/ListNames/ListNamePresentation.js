import React, { Component } from 'react';



let maxlength="25";



const ListNamePresentation = ({ onChange, name, id, selectedListId, onClick}) => (


    <li className="li"><input className={selectedListId === id ?  "listName listName--lastSelected" : "listName"}
                                     maxLength={maxlength} value={name} onChange={onChange} onClick={onClick}/>
    </li>


);



export default ListNamePresentation;
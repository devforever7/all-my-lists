import React, { Component } from 'react';



let maxlength="25";



const ListNamePresentation = ({ onChange, name, id, selectedListId, onClick, className }) => (


    <li className="li"><input className={className}
                                     maxLength={maxlength} value={name} onChange={onChange} onClick={onClick}/>
    </li>


);



export default ListNamePresentation;
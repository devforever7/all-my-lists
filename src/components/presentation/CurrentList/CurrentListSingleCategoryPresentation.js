import React from 'react'

const CurrentListSingleCategoryPresentation = ({ name, onChange }) => (

    <li className="li"><input className={'categoryName'} value={name} onChange={onChange}/></li>

);



export default CurrentListSingleCategoryPresentation;
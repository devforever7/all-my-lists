import React from 'react';

const AddCategoryPresentation = ({ addNewCategory, list_id }) => (

    <button className="button" onClick={e => addNewCategory(list_id)}>Add Category</button>

);



export default AddCategoryPresentation;
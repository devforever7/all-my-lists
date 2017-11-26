import React from 'react';



const EntityFieldStylingPresentation = ({ selected_entity_id }) => (

    <ul className="ul">

        <h2 className="h2">Categories for {selected_list_name}</h2>


        {Reflect.ownKeys(categoryNames).map(categoryNameKey =>

            <CurrentListSingleCategoryPresentation
                key={categoryNameKey}
                {...categoryNames[categoryNameKey]}
                onChange={e => onCategoryNameBlur(categoryNameKey, e.target.value)}
            />
        )}

    </ul>



);


export default CurrentListPresentation;
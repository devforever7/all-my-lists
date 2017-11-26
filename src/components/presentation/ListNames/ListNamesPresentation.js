import React from 'react';
import ListNamePresentation from './ListNamePresentation';

/*className={listNameKey === lastAddedListId ? 'listName listName--lastAdded' : 'listName'}*/


const ListNamesPresentation = ({ listNames, selectedListId, onListNameBlur, onListNameClick }) => (
    <ul className="ul">

        <h2 className="h2">Lists</h2>


        {Reflect.ownKeys(listNames).map(listNameKey =>

            <ListNamePresentation
                key={listNameKey}
                {...listNames[listNameKey]}
                onChange={e => onListNameBlur(listNameKey, e.target.value)}
                onClick={e => onListNameClick(listNameKey)}
                isSelected={listNameKey === selectedListId}
                isNotSelected={listNameKey !== selectedListId}
            />

        )}
    </ul>
);

/*selectedListId={selectedListId}*/


export default ListNamesPresentation;
import React from 'react';
import ListNamesContainer from '../../containers/ListNamesContainer';
import AddListContainer from '../../containers/AddListContainer';


const AsidePresentation = () => (
    <aside className="aside">
            <ListNamesContainer/>
            <AddListContainer/>
    </aside>
);

export default AsidePresentation;
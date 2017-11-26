import React from 'react';
import CurrentListContainer from '../../containers/CurrentListContainer';
import AddCategoryContainer from '../../containers/AddCategoryContainer';


const SectionPresentation = () => (
    <section className="section">
        <CurrentListContainer/>
        <AddCategoryContainer/>
    </section>
);

export default SectionPresentation;
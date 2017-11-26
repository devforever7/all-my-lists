import { connect } from 'react-redux'
import EntityFieldStylingPresentation from '../presentation/EntityFieldStylingPresentation';



const mapStateToProps = (state, props) => {
    return {
        selected_entity_id: state.lastSelected[`${props.selected_entity}_id`]
    }
};





const EntityFieldStylingContainer = connect(
    mapStateToProps,
    null
)(EntityFieldStylingPresentation);

export default EntityFieldStylingContainer;
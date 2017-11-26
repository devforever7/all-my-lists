import { connect } from 'react-redux'
import CurrentListPresentation from '../presentation/CurrentList/CurrentListPresentation';
import { editCategoryName } from '../../actions/index';
import { getAllowedCategoriesSelector} from '../../selectors/index';


const mapStateToProps = (state) => {
    return {
        selected_list_name: state.lists[state.lastSelected.list_id].name,
        categoryNames: getAllowedCategoriesSelector(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCategoryNameBlur: (id, name) => {
            dispatch(editCategoryName({id, name}))
        }
    }
};



const CurrentListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrentListPresentation);

export default CurrentListContainer;
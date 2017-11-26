import { connect } from 'react-redux'
import { addCategorySmart } from '../../actions/index';
import AddCategoryPresentation from '../presentation/AddCategoryPresentation';


const mapStateToProps = (state) => {
    return {
        list_id: state.lastSelected.list_id
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewCategory: (list_id) => {
            dispatch(addCategorySmart({list_id}))
        }
    }
};

const AddCategoryContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCategoryPresentation);

export default AddCategoryContainer;
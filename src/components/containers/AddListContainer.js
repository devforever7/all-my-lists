import { connect } from 'react-redux'
import { addListSmart } from '../../actions/index';
import AddListPresentation from '../presentation/AddListPresentation';


const mapDispatchToProps = (dispatch) => {
    return {
        addNewList: () => {
            dispatch(addListSmart());
        }
    }
};

const AddListContainer = connect(
    null,
    mapDispatchToProps
)(AddListPresentation);

export default AddListContainer;
import { connect } from 'react-redux'
import { editListName } from '../../actions/index';
import { clickListName } from '../../actions/index';
import ListNamesPresentation from '../presentation/ListNames/ListNamesPresentation';


const mapStateToProps = (state) => {
    return {
        listNames: state.lists,
        selectedListId: state.lastSelected.list_id
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onListNameBlur: (id, name) => {
            dispatch(editListName({id, name}))
        },
        onListNameClick: (id) => {
            dispatch(clickListName({id}))
        }
    }
};

const ListNamesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListNamesPresentation);

export default ListNamesContainer;
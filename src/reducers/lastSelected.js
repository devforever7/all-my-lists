

const lastSelected = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_LIST':
            return Object.assign({}, state, {list_id: action.id});
        case 'ADD_CATEGORY':
            return Object.assign({}, state, {category_id: action.id});
        case 'CLICK_LIST_NAME':
            return Object.assign({}, state, {list_id: action.id});
        default:
            return state
    }
};

export default lastSelected;
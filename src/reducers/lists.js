const list = (state, action) => {
    switch (action.type) {
        case 'ADD_LIST':
            return {
                id: action.id,
                name: action.name,
                categoryIds: []
            };
        case 'EDIT_LIST_NAME':
            return Object.assign({}, state, {
                name: action.name
            });

        case 'ADD_CATEGORY':
            return Object.assign({}, state, {
                categoryIds: [...state.categoryIds, action.id]
            });
        default:
            return state
    }
};

const lists = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_LIST':
            return Object.assign({}, state, {[action.id]: list(undefined, action)});

        case 'EDIT_LIST_NAME':
            return Object.assign({}, state, {[action.id]: list(state[action.id], action)});

        case 'ADD_CATEGORY':
            return Object.assign({}, state, {[action.list_id]: list(state[action.list_id], action)});

        default:
            return state
    }
};

export default lists;
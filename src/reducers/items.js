const item = (state, action) => {
    switch (action.type) {

        case 'ADD_ITEM':
            return {
                id: action.id,
                category_id: action.category_id,
                list_id: action.list_id,
                name: action.name,
                weight: action.weight,
                number: action.number
            };
        case 'EDIT_ITEM':
            return Object.assign({}, state, {
                [action.fieldName]: action.fieldValue
            });
        default:
            return state
    }
};

const items = (state = [], action) => {
    switch (action.type) {

        case 'ADD_ITEM':
            return Object.assign({}, state, {[action.id]: item(undefined, action)});

        case 'EDIT_ITEM':
            return Object.assign({}, state, {[action.id]: item(state[action.id], action)});

        default:
            return state
    }
};

export default items;
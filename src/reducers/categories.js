/*const category = (state, action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            return {
                id: action.id,
                list_id: action.list_id,
                name: action.name
            };
        case 'EDIT_CATEGORY_NAME':
            if (state.id !== action.id) {
                return state
            }

            return Object.assign({}, state, {
                name: action.name
            });
        default:
            return state
    }
};

const categories = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            return [
                ...state,
                category(undefined, action)
            ];
        case 'EDIT_CATEGORY_NAME':
            return state.map(t =>
                category(t, action)
            );
        default:
            return state
    }
};

export default categories;*/

const category = (state, action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            return {
                id: action.id,
                list_id: action.list_id,
                name: action.name
            };
        case 'EDIT_CATEGORY_NAME':
            return Object.assign({}, state, {
                name: action.name
            });
        case 'ADD_ITEM':
            return Object.assign({}, state, {
                itemIds: [...state.itemIds, action.id]
            });
        default:
            return state
    }
};

const categories = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            return Object.assign({}, state, {[action.id]: category(undefined, action)});

        case 'EDIT_CATEGORY_NAME':
            return Object.assign({}, state, {[action.id]: category(state[action.id], action)});

        case 'ADD_ITEM':
            return Object.assign({}, state, {[action.category_id]: category(state[action.category_id], action)});

        default:
            return state
    }
};

export default categories;
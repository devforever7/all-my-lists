let nextItemID = 2;
let nextCategoryID = 2;
let nextListID = 2;


/* Entity: items */
export const addItem = (payload) => {
    return {
        type: 'ADD_ITEM',
        id: ++nextItemID,
        category_id: payload.category_id,
        list_id: payload.list_id,
        name: 'Default item',
        weight: 0,
        number: 1
}
};

export const editItem = (payload) => {
    return {
        type: 'EDIT_ITEM',
        id: payload.id,
        fieldValue: payload.fieldValue,
        fieldName: payload.fieldName
    }
};



/* Entity: categories */

export const addCategorySmart = (payload) => {

    return dispatch => {
        dispatch(addCategory({list_id: payload.list_id}));
        /*dispatch(addItem({category_id: nextCategoryID, list_id: payload.list_id}));*/

    }

};


export const addCategory = (payload) => {
    return {
        type: 'ADD_CATEGORY',
        id: ++nextCategoryID,
        list_id: payload.list_id,
        name: 'Default category'
    }
};

export const editCategoryName = (payload) => {
    return {
        type: 'EDIT_CATEGORY_NAME',
        id: payload.id,
        name: payload.name
    }
};



/* Entity: lists */
export const addListSmart = () => {

    return dispatch => {
        dispatch(addList());
       dispatch(addCategorySmart({list_id: nextListID}));
    }

};


export const addList = () => {
    return {
        type: 'ADD_LIST',
        id: ++nextListID,
        name: 'Default list'
    }
};


export const editListName = (payload) => {
    return {
        type: 'EDIT_LIST_NAME',
        id: payload.id,
        name: payload.name
    }
};



export const clickListName = (payload) => {
    return {
        type: 'CLICK_LIST_NAME',
        id: payload.id
    }
};










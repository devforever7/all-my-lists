import { createSelector } from 'reselect';



const getAllCategories = (state) => state.categories;
const getAllowedCategoryIds = (state) => state.lists[state.lastSelected.list_id].categoryIds;


export const getAllowedCategoriesSelector = createSelector(
    [getAllCategories, getAllowedCategoryIds],
    (allCategories, allowedCategoryIds) => {

        return allowedCategoryIds.reduce((obj, key) => {
            obj[key] = allCategories[key];
            return obj;
        }, {});

    }
);







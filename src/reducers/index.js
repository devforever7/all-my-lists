import { combineReducers } from 'redux'
import items from './items';
import categories from './categories';
import lists from './lists';
import lastSelected from './lastSelected';


const listsApp = combineReducers({
    lists,
    categories,
    items,
    lastSelected
});

export default listsApp;

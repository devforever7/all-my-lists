import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import listsApp from './reducers/index';
import defaultListsState  from './initialState/listNamesInitialState';
import defaultCategoriesState  from './initialState/categoryNamesInitialState';
import defaultItemsState  from './initialState/itemNamesInitialState';
import lastSelectedState  from './initialState/lastSelectedInitialState';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';



let store = createStore(listsApp, Object.assign({}, defaultListsState, defaultCategoriesState, defaultItemsState, lastSelectedState),
    compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();

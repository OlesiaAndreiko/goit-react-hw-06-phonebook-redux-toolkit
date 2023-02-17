// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer, filtersReducer } from './reduser';

import {contactsReducer} from "./contactsSlice"
import {filtersReducer} from "./filterSlise"

// const enhancer = devToolsEnhancer();
export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
    },
});

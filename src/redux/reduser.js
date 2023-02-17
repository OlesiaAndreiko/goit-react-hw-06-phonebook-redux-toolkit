import initalContacts from '../components/contacts.json';
// import { combineReducers } from 'redux';
import { addContact, deleteContact, searchContact } from './actions';
import { createReducer } from '@reduxjs/toolkit';

// const contactsInitialState = JSON.parse(localStorage.getItem('contacts')) ?? initalContacts;
const contactsInitialState = initalContacts;

export const contactsReducer = createReducer(contactsInitialState, {
  // [addContact] : (state, action) => { return [...state, action.payload];},
  [addContact]: (state, action) => {
    state.push(action.payload);
  },

  // [deleteContact] : (state, action) => {return state.filter(contact => contact.id !== action.payload);},
  [deleteContact]: (state, action) => {
    const index = state.findIndex(contact => contact.id !== action.payload);
    state.splise(index, 1);
  },
});

const filtersInitialState = '';

export const filtersReducer = createReducer(filtersInitialState, {
  // [searchContact]: (_, action) => {
  //   return action.payload;
  // },
  [searchContact]: (_, action) =>  action.payload,
});

//  export const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case addContact.type:
//       return [...state, action.payload];

//     case deleteContact.type:
//       return state.filter(contact => contact.id !== action.payload);

//     default:
//       return state;
//   }
// };

// export const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case searchContact.type:
//       return action.payload;

//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filters: filtersReducer,
// });

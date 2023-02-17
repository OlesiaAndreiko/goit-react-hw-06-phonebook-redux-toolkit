import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contact/addContact', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});

export const deleteContact = createAction('contact/deleteContact');
export const searchContact = createAction('filters/searchContact');

// export const addContact = (name, number) => {
//   return {
//     type: 'contact/addContact',
//     payload: {
//       id: nanoid(),
//       name,
//       number,
//     },
//   };
// };

// export const deleteContact = contactId => {
//   return {
//     type: 'contact/deleteContact',
//     payload: contactId,
//   };
// };

// export const searchContact = value => {
//   return {
//     type: 'filters/searchContact',
//     payload: value,
//   };
// };

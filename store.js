import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';

//Store State
const initialState = {
  groceries: [],
};

//Action Types
const ADD_GROCERY = 'ADD_GROCERY';

//Action Creators (To be exported. When used, goes through reducer)
export const addGroceryItem = groceryItem => ({
  type: ADD_GROCERY,
  id: nextId++,
  text,
});

//Reducer Function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROCERY:
      const addThisGrocery = {
        id: action.id,
        text: action.text,
        bought: false,
      };
      return { ...state, groceries: [...state, addThisGrocery] };
    default:
      return state;
  }
};

//Create The Store
const store = createStore(reducer);
export default store;

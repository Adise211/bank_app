import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FINDBALANCE, FINDCITY, FIND_MORTGAGE,FIND_CARDS, TWO_FILTERS } from '../constants/actionTypes';

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case FINDBALANCE:
      return action.payload;
    case FINDCITY:
      return {...posts, cities:action.payload};
    case FIND_MORTGAGE:
      return action.payload;
    case FIND_CARDS:
      return action.payload;
    case TWO_FILTERS:
      return action.payload;
    default:
      return posts;
  }
};

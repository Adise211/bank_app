import { FINDBALANCE, FINDCITY, FIND_MORTGAGE,FIND_CARDS, TWO_FILTERS} from '../constants/actionTypes';

import * as api from '../api/index.js';


export const balanceFilter = (start,end) => async (dispatch) => {
  try {
    const result = await api.balanceFilter(start,end); // I am sending this (from and up to)
    dispatch({ type: FINDBALANCE, payload: result.data }); // I am getting the result.data
  } catch (error) {
    console.log(error.message);
  }
};


export const cityFilter = (cities) => async (dispatch) => {

  try {
    const { data } = await api.cityFilter(cities);
    dispatch({ type: FINDCITY, payload: data });

  } catch (e) {
    console.log(e);
  }
}


export const mortgageFilter = (value) => async (dispatch) => {
  try {
    const { data } = await api.mortgageFilter(value);
    dispatch({ type: FIND_MORTGAGE, payload: data });

  } catch (e) {
    console.log(e);
  }
}


export const cardsFilter = (cards) => async (dispatch) => {
  try {
    const { data } = await api.cardsFilter(cards);
    dispatch({ type: FIND_CARDS, payload: data });

  } catch (e) {
    console.log(e);
  }
}


export const twoFilters = (start,end,radioValue,cards) => async (dispatch) => {
  try {
    const {data} = await api.twoFilters(start,end,radioValue,cards);
    dispatch({ type: TWO_FILTERS, payload: data });

  } catch (e) {
    console.log(e);
  }
}

export const threeFilters = (start,end,radioValue,cards) => async (dispatch) => {
  try {
    const {data} = await api.threeFilters(start,end,radioValue,cards);
    dispatch({ type: TWO_FILTERS, payload: data });
    
  } catch (e) {
    console.log(e);
  }
}

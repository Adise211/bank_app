import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FINDBALANCE, FINDCITY } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

// Adise - changes:
export const balanceFilter = (start,end) => async (dispatch) => {
  try {
    
    const result = await api.balanceFilter(start,end); // I am sending this (from and up to)
    dispatch({ type: FINDBALANCE, payload: result.data }); // I am getting the result.data
  } catch (error) {
    console.log(error.message);
  }
};

export const getCities = () => async (dispatch) => {
  try {
    const { result } = await api.getCities();

    dispatch({ type: FINDCITY, payload: result });
  } catch (e) {
    console.log(e);
  }
}

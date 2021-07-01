import React, { useReducer } from 'react';
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content
        }
      ]
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.id);
    case 'fetch_blogpost':
      return state.find(blogPost => blogPost.id === action.id);
    case 'update_blogPost':
      let index = state.findIndex(blogPost => blogPost.id == action.payload.id);
      state.splice(index, 1, {
        id: action.payload.id,
        title: action.payload.title,
        context: action.payload.content
      })
      return [...state];
    default:
      return state;
  }
}

const addBlogPosts = dispatch => {
  return (title, content, callback) => {
    dispatch({
      type: 'add_blogpost',
      payload: {
        title,
        content
      }
    });
    callback();
  }
}

const deleteBlogPosts = dispatch => {
  return (id) => {
    dispatch({
      type: 'delete_blogpost',
      id: id
    })
  }
}

const fetchBlogPost = dispatch => {
  return (id) => {
    dispatch({
      type: 'fetch_blogpost',
      id
    })
  }
}

const updateBlogPost = dispatch => {
  return (title, content, id, callback) => {
    dispatch({
      type: 'update_blogPost',
      payload: {
        title,
        content,
        id
      }
    })
    callback();
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    addBlogPosts,
    deleteBlogPosts,
    fetchBlogPost,
    updateBlogPost
  },
  [{
    id: 1,
    title: 'Test Title',
    content: 'Test content'
  }]
);
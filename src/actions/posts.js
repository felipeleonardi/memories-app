import * as api from '../api';
import * as aType from '../constants/actionPostsTypes';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({
            type: aType.FETCH_ALL,
            payload: data
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({
            type: aType.CREATE,
            payload: data
        });
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, updatedPost) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, updatedPost);
        dispatch({
            type: aType.UPDATE,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({
            type: aType.DELETE,
            payload: id
        })
    } catch (error) {
        console.log(error);
    }
}
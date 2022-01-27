import * as aType from '../constants/actionPostTypes';

export const getPost = post => (dispatch) => {
    dispatch({
        type: aType.GET,
        payload: post
    });
}

export const clearPost = () => (dispatch) => {
    dispatch({
        type: aType.CLEAR,
        payload: {}
    });
}
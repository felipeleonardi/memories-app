import * as aType from '../constants/actionPostTypes';

const post = (post = {}, action) => {
    switch (action.type) {
        case aType.GET:
            return action.payload;
        default:
            return post;
    }
}

export default post;
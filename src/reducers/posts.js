import * as aType from '../constants/actionPostsTypes';

const posts = (posts = [], action) => {
    switch (action.type) {
        case aType.FETCH_ALL:
            return action.payload;
        case aType.CREATE:
            return [...posts, action.payload];
        case aType.UPDATE:
            return posts.map(post => post._id === action.payload._id ? action.payload : post);
        case aType.DELETE:
            return posts.filter(post => post._id !== action.payload && post);
        default:
            return posts;
    }
}

export default posts;
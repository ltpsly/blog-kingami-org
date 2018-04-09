import * as FromBlogActions from './blog.actions';
import { Article } from '../../shared/models';

export interface BlogState {
    loading: boolean;
    posts: Article[];
    nPosts: number;
}

const initialState: BlogState = {
    loading: true,
    posts: [],
    nPosts: 0
};

export function blogReducer(state = initialState, action: FromBlogActions.BlogActions) {
    switch (action.type) {
        case FromBlogActions.LOADING:
            return {
                ...state
            };
        case FromBlogActions.POSTS:
            // const allPosts = [...state.posts, action.payload];
            const allPosts = action.payload;
            console.log('initial state:    ', state);
            return {
                ...state,
                posts: allPosts,
                nPosts: allPosts.length
            };
        case FromBlogActions.POST:
            return {
                ...state
            };
        default:
            return {
                ...state
            };
    }
}

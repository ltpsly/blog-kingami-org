import * as FromBlogActions from './blog.actions';
import { Article } from '../../shared/models';

export interface BlogState {
    loading: boolean;
    posts: Article[];
    nPosts: number;
    post: Article;
}

const initialState: BlogState = {
    loading: true,
    posts: [],
    nPosts: 0,
    post: null
};

export function blogReducer(state = initialState, action: FromBlogActions.BlogActions) {
    switch (action.type) {
        case FromBlogActions.LOADING:
            return {
                ...state
            };
        case FromBlogActions.POSTS:
            return {
                ...state,
                posts: action.payload
            };
        case FromBlogActions.POST:
            return {
                ...state,
                post: action.payload
            };
        default:
            return {
                ...state
            };
    }
}

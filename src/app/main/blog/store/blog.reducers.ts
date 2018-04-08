import * as FromBlogActions from './blog.actions';
import { Article } from '../../shared/models';

export interface BlogState {
    loading: boolean;
    posts: Article[];
}

const initialState: BlogState = {
    loading: true,
    posts: null
};

export function blogReducer(state = initialState, action: FromBlogActions.BlogActions) {
    switch (action.type) {
        case FromBlogActions.LOADING:
            return {
                ...state
            };
        case FromBlogActions.LOAD_POSTS:
            return {
                ...state
            };
        case FromBlogActions.POSTS:
            return {
                ...state
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

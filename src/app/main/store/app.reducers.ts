import { ActionReducerMap } from '@ngrx/store';

import * as fromBlogReducer from '../blog/store/blog.reducers';

export interface AppState {
    blogReducer: fromBlogReducer.BlogState;
}

export const AppReducers: ActionReducerMap<AppState> = {
    blogReducer: fromBlogReducer.blogReducer
};

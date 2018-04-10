import { Action } from '@ngrx/store';
import { Article } from '../../shared/models';

export const LOADING = 'LOADING';
export const LOAD_POSTS = 'LOAD_POSTS';
export const POSTS = 'POSTS';
export const GET_POST = 'GET_POST';
export const POST = 'POST';

export class Loading implements Action {
    readonly type = LOADING;
    constructor(public payload: any) {}
}

export class LoadPosts implements Action {
    readonly type = LOAD_POSTS;
    constructor() {}
}

export class Posts implements Action {
    readonly type = POSTS;
    constructor(public payload: Article[]) {}
}

export class GetPost implements Action {
    readonly type = GET_POST;
    constructor(public payload: any) {}
}

export class Post implements Action {
    readonly type = POST;
    constructor(public payload: Article) { }
}

export type BlogActions = Loading | LoadPosts | Posts | GetPost | Post;

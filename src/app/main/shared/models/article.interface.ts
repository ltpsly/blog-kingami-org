import { Profile } from './profile.interface';

export interface Article {
    slug?: string;
    title: string;
    description: string;
    body: string;
    tagList?: (string)[] | null;
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: Profile;
}

export interface Post {
    id: number;
    image?: string;
    text: string;
    date?: string;
    lesson_num?: number;
    title: string;
    author?: number;
}

export type Variant = 'large' | 'medium' | 'small';

export type Page = 'sign-in' | 'success' | 'all-posts' | 'selected post' | 'sign-up' | 'registration-confirmation';
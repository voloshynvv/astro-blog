import { slug } from 'github-slugger';

export const slugify = (title: string) => slug(title);

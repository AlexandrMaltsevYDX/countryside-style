import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { BlogInterface } from '~interfaces/blog.interface';

export interface CardBlogComponentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  path: "home" | "blog" | "blogCard";
  blogCardItem: BlogInterface;
  children?: ReactNode;
}

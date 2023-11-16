export interface FeaturedImageProps {
  url: string;
}

export interface CategoryProps {
  slug: string;
  category: string;
}

export interface AuthorProps {
  bio: string;
  id: string;
  name: string;
  photo: {
    url: string;
  };
}

export interface FeaturedImageProps {
  url: string;
}

export interface CategoryProps {
  slug: string;
  category: string;
}

export interface EdgeProps {
  node: PostProps;
}

export interface PostsConnectionProps {
  edges: EdgeProps[];
}

export interface QueryPostsResultProps {
  postsConnection: PostsConnectionProps;
}

export interface ContentProps {
  raw: {
    children: {
      type: string;
      children?: {
        text?: string;
        underline?: boolean;
        bold?: boolean;
        italic?: boolean;
      }[];
    }[];
  };
}

export interface PostProps {
  author: AuthorProps;
  createdAt: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: FeaturedImageProps;
  content?: ContentProps;
  categories: CategoryProps[];
}

export interface QueryPostDetailsResultProps {
  post: PostProps;
}

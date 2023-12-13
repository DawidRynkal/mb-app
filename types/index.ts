declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      NEXT_PUBLIC_GRAPHCMS_ENDPOINT: string;
      HYPOGRAPH_TOKEN: string;
    }
  }
}

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
  pageInfo: { hasNextPage: boolean };
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

export interface CommentPostType {
  slug: string;
  comment: string;
  email: string;
  name: string;
}

export interface GetCommentsType {
  comment: string;
  createdAt: string;
  name: string;
}

export interface QueryCommentsDetailsResultType {
  comments: GetCommentsType[];
}

export interface WorkerType {
  id: string;
  name: string;
  phoneNumber: number;
  profession: string;
  photo: { url: string };
}

export interface QueryWorkerType {
  workers: WorkerType[];
}

export interface CarType {
  node: {
    id: string;
    fuelType: string;
    model: string;
    engine: string;
    subModel: string;
    transmission: string;
    powerBeforeKm: number;
    niutonometerBeforeNm: number;
    powerAterKm: number;
    niutonometeAfterNm: number;
    carImage: { url: string };
    powerUpImage: { url: string };
  };
}

export interface CarsConnectionProps {
  edges: CarType[];
  pageInfo: { hasNextPage: boolean };
}



export interface SliderImagesType {
  slider_images: [
    {
      slide1: {
        url: string;
      };
      slide2: {
        url: string;
      };
      slide3: {
        url: string;
      };
      slide4: {
        url: string;
      };
    }
  ];
}

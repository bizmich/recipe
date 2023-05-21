export interface FetchResponse<T> {
  list: T[];
  count: number;
}

export interface Recipe {
  description: string;
  createdDate?: string;
  image: Blob | string;
  ingredient?: string[] | string;
  name: string;
  cookingTime: number;
  comments?: Comment[];
  rate?: number;
  id?: string;
  viewCount?: number;
}

export interface Comment {
  commentedAt?: string;
  id?: string;
  name: string;
  email: string;
  comment: string;
  recipeId: string;
}

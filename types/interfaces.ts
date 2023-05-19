export interface FetchResponse<T> {
  list: T[];
  count: number;
}

export interface Recipe {
  createdDate: string;
  description: string;
  id?: string;
  image: string | null;
  ingredient?: string[];
  name: string;
  cookingTime: number;
  comment?: Comment[];
}

export interface Comment {
  commentedAt: string;
  id: string;
  name: string;
  email: string;
  comment: string;
  userId: string;
}

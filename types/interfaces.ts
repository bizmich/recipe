export interface FetchResponse<T> {
  list: T[];
  count: number;
}

export interface Recipe {
  description: string;
  createdDate?: string;
  image: string | null;
  ingredient?: string[];
  name: string;
  cookingTime: number;
  comment?: Comment[];
  rate?: number;
  id?: string;
}

export interface Comment {
  commentedAt: string;
  id: string;
  name: string;
  email: string;
  comment: string;
  userId: string;
}

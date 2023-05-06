export interface Recipe {
  createdDate: string;
  description: string;
  id?: string | undefined;
  image: string | null;
  ingredient: string[] | string;
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

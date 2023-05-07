export interface Recipe {
  createdDate: string;
  description: string;
  id?: string;
  image: string | null;
  ingredient: string[];
  name: string;
  cookingTime?: string;
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

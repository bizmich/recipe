export interface Recipe {
  createdDate: string;
  description: string;
  id?: string | undefined;
  image: string | null;
  ingredient: string[] | string;
  name: string;
  cookingTime: number;
  comment?: string[];
}

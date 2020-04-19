export interface ICategory {
  name: string;
  uid: string;
  updatedAt: Date;
  featuredImage: IImage;
  recipes: IRecipe[];
}

export interface IRecipe {
  name: string;
  uid: string;
  description: string;
  images: IImage[];
  categories: ICategory[];
  ingredients: IIngredient[];
  serves: number;
  timeNeeded: ITimeNeeded;
  instructions: IInstruction[];
  updatedAt: Date;
}

export interface IImage {
  name: string;
  alternativeText: string;
  url: string;
}

export interface IIngredient {
  name: string;
  quantity: string;
}

export interface ITimeNeeded {
  prepTime: number;
  waitTime: number;
  cookTime: number;
}

export interface IInstruction {
  step: number;
  images: IImage[];
  shortDescription: string;
  longDescription: string;
}

export interface ITag {
  tagName: string;
  updatedAt: Date;
  featuredImage: IImage;
}

export interface IRecipe {
  name: string;
  uid: string;
  description: string;
  images: IImage[];
  tags: ITag[];
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

import * as React from 'react';
import { ICategory, IRecipe } from '../strapi/APItypes';
import axios from 'axios';
import url from '../strapi/URL';
import { isNullOrUndefined } from 'util';

export interface IContextState {
  loading: boolean;
  categoryList: ICategory[];
  recipeList: IRecipe[];
  recipe?: IRecipe;
  modifyContext: {
    getCategories: () => void;
    getRecipes: (categoryUID?: string) => void;
    getOneRecipe: (recipeUID?: string) => void;
  };
}

const defaultContext = {
  loading: true,
  categoryList: [],
  recipeList: [],
  recipe: undefined,
  modifyContext: {
    getCategories: () => {},
    getRecipes: (categoryUID?: string) => {},
    getOneRecipe: (recipeUID?: string) => {},
  }
};

export const Context = React.createContext<IContextState>(defaultContext);

export interface IContextProviderProps {
  children: React.ReactElement;
}

export default class ContextProvider extends React.Component<IContextProviderProps, IContextState> {

  constructor(props: Readonly<IContextProviderProps>) {
    super(props);
    this.state = {
      loading: true,
      categoryList: [],
      recipeList: [],
      recipe: undefined,
      modifyContext: {
        getCategories: this.getCategories,
        getRecipes: this.getRecipes,
        getOneRecipe: this.getOneRecipe
      }
    };
  }

  getCategories = async () => {
    const response = await axios.get(`${url}/categories`);
    this.setState({ ...this.state, loading: false, categoryList: response ? response.data : []});
  }

  getRecipes = async (categoryUID?: string) => {
    let recipes: IRecipe[] = [];
    if (isNullOrUndefined(categoryUID)) {
      const response = await axios.get(`${url}/recipes`);
      recipes = response ? response.data : [];
    } else {
      if (isNullOrUndefined(this.state.categoryList) || this.state.categoryList.length <= 0) {
        await this.getCategories();
      }
      const category = this.state.categoryList.find(item => item.uid === categoryUID);
      if (!isNullOrUndefined(category)) {
        recipes = category.recipes ?? [];
      }
    }
    this.setState({ ...this.state, loading: false, recipeList: recipes});
  }

  getOneRecipe = async (recipeUID?: string) => {
    if (isNullOrUndefined(recipeUID)) {
      this.setState({ ...this.state, loading: true, recipe: undefined});
    } else {
      if (isNullOrUndefined(this.state.recipeList) || this.state.recipeList.length <= 0) {
        await this.getRecipes();
      }
      const recipe = this.state.recipeList.find(item => item.uid === recipeUID)
      this.setState({ ...this.state, loading: false, recipe});
    }
  }

  public render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

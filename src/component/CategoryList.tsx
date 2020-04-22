import * as React from 'react';
import { ICategory } from '../strapi/APItypes';
import CategoryCard from './CategoryCard';
import { CardDeck } from 'react-bootstrap';

export interface ICategoryListProps {
  categoryList: ICategory[]
}

export default function CategoryList ({categoryList}: ICategoryListProps) {
  return (
    <div className='categories'>
      <CardDeck>
        {categoryList.map(item => {
          return (
            <CategoryCard
              image={item.featuredImage}
              name={item.name}
              url={`/recipes/categories/${item.uid}`}
            />
          )
        })}
      </CardDeck>
    </div>
  );
}

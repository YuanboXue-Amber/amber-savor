import * as React from 'react';
import { Link } from 'react-router-dom';
import { ICategory } from '../strapi/APItypes';

export interface ICategoryListProps {
  categoryList: ICategory[]
}

export default function CategoryList ({categoryList}: ICategoryListProps) {
  return (
    <div>
      <ul className='categories'>
        {categoryList.map(item => {
          return (
            <li key={item.name} className='category'>
              <img src={item.featuredImage.url} alt={item.featuredImage.alternativeText}/>
              <Link to={`/recipes/categories/${item.uid}`} className='btn btn-primary product-link'>{item.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

import * as React from 'react';
import { ICategory } from '../strapi/APItypes';
import BasicCard from './BasicCard';
import { CardDeck } from 'react-bootstrap';

export interface ICategoryListProps {
  categoryList: ICategory[]
}

export default function CategoryList ({categoryList}: ICategoryListProps) {
  return (
    // <div>
    //   <ul className='categories'>
    <div className='categories'>
      <CardDeck>
        {categoryList.map(item => {
          return (
            <BasicCard
              image={item.featuredImage}
              name={item.name}
              url={`/recipes/categories/${item.uid}`}
            />
            // <li key={item.name} className='category'>
            //   <img src={item.featuredImage.url} alt={item.featuredImage.alternativeText}/>
            //   <Link to={`/recipes/categories/${item.uid}`} className='btn btn-primary product-link'>{item.name}</Link>
            // </li>
          )
        })}
      </CardDeck>
    </div>
  );
}

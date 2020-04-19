import * as React from 'react';
import { Context } from '../context/ContextProvider';
import { Link } from 'react-router-dom';

export default function CategoryList () {
  const context = React.useContext(Context);
  const {loading, categoryList, modifyContext} = context;

  React.useEffect(() => {
    modifyContext.getCategories();
  }, [modifyContext])

  if (loading)
    return (<h2 className='section-title'>Loading...</h2>);

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

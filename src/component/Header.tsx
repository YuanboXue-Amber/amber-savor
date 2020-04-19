import React from 'react';
import { Context } from '../context/ContextProvider';
import { Link } from 'react-router-dom';

export default function Header() {
  const context = React.useContext(Context);
  const {loading, categoryList, modifyContext} = context;

  React.useEffect(() => {
    modifyContext.getCategories();
  }, [modifyContext])

  return (
    <header className='header'>
      {/* <img src={logo} alt='vintage tech' className='logo' /> */}
      <nav>
        <ul>
          <div>
            <li><Link to='/'>Home</Link></li>
            { !loading && categoryList &&
              <li><Link to='/recipes/categories'>recipes</Link></li> }
          </div>
        </ul>
      </nav>
    </header>
  );
}

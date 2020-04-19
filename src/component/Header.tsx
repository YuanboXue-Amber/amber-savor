import React from 'react';
import { Context } from '../context/ContextProvider';
import { GoSearch } from 'react-icons/go';
import {
  NavDropdown,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

const handleSearch = () => {
  console.log('search')
}

export default function Header() {
  const context = React.useContext(Context);
  const { loading, categoryList, modifyContext } = context;

  React.useEffect(() => {
    modifyContext.getCategories();
  }, [modifyContext]);

  return (
    <Navbar bg='light' expand='lg'>
      <div className='container'>
        <Navbar.Brand className='nav-brand' href='#home'>
          Amber Savor
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse id='basic-navbar-nav'>

          <Nav className='mr-auto'>

            <div className='container'>
              <Nav.Link href='/'>Home</Nav.Link>
            </div>

            <div className='container'>
              <Nav.Link href='/about'>About</Nav.Link>
            </div>

            <div className='container'>
              <NavDropdown title='Recipes' id='basic-nav-dropdown'>

                <NavDropdown.Item key='all-recipes' href={`/recipes/categories/all`}>
                  All Recipes
                </NavDropdown.Item>
                {
                  !loading && categoryList && categoryList.length > 0 &&
                  <NavDropdown.Divider />
                }
                {
                  !loading && categoryList && categoryList.length > 0 &&
                  categoryList.map(category => {
                    return (
                      <NavDropdown.Item key={category.uid} href={`/recipes/categories/${category.uid}`}>
                        {category.name}
                      </NavDropdown.Item>
                    );
                  })
                }
              </NavDropdown>
            </div>
          </Nav>

          <Form inline>
            <div className='container'>
              <FormControl
                type='text'
                placeholder='Search'
                className='mr-sm-2'
              />
              <Button variant='light' onClick={handleSearch}>
                <GoSearch />
              </Button>
            </div>
          </Form>

        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

import React, { useState } from 'react';
import { Context } from '../context/ContextProvider';
import { GoSearch } from 'react-icons/go';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
  NavLink,
  NavItem,
} from 'react-bootstrap';

const handleSearch = () => {
  console.log('search');
};

const CustomMenu = React.forwardRef((props: any, ref) => {
  const { children, style, className, 'aria-labelledby': labeledBy } = props;
  const [value, setValue] = useState('');

  return (
    <div
      ref={ref as any}
      style={style}
      className={className}
      aria-labelledby={labeledBy}
    >
      <FormControl
        autoFocus
        className='mx-3 my-2 w-auto'
        placeholder='Type to filter...'
        onChange={(e: any) => setValue(e.target.value)}
        value={value}
      />
      <ul className='list-unstyled'>
        {React.Children.toArray(children).filter(
          (child: any) =>
            !value ||
            value.trim().length <= 0 ||
            (child.props && child.props.role === 'separator') || // divider
            (child.props &&
              (child.props.children as string)
                .toLowerCase()
                .includes(value.trim()))
        )}
      </ul>
    </div>
  );
});

export default function Header() {
  const context = React.useContext(Context);
  const { loading, categoryList, modifyContext } = context;

  React.useEffect(() => {
    modifyContext.getCategories();
  }, [modifyContext]);

  return (
    <Navbar bg='light' expand='lg'>
      <div className='container'>
        {/* brand */}
        <Navbar.Brand className='nav-brand' href='/'>
          Amber Savor
        </Navbar.Brand>

        {/* toggle for smaller screen */}
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>

          {/* links in navbar */}
          <Nav className='mr-auto'>

            <div className='container'>
              <Nav.Link href='/'>Home</Nav.Link>
            </div>

            <div className='container'>
              <Nav.Link href='/about'>About</Nav.Link>
            </div>

            {/* recipes dropdown with search box inside for filtering */}
            <div className='container'>
              <Dropdown as={NavItem}>
                <Dropdown.Toggle id='basic-nav-dropdown' as={NavLink}>
                  Recipes
                </Dropdown.Toggle>
                <Dropdown.Menu as={CustomMenu}>
                  <Dropdown.Item
                    key='all-recipes'
                    href={`/recipes/categories/all`}
                  >
                    All Recipes
                  </Dropdown.Item>
                  {!loading && categoryList && categoryList.length > 0 && (
                    <Dropdown.Divider />
                  )}
                  {!loading &&
                    categoryList &&
                    categoryList.length > 0 &&
                    categoryList.map((category) => {
                      return (
                        <Dropdown.Item
                          key={category.uid}
                          href={`/recipes/categories/${category.uid}`}
                        >
                          {category.name}
                        </Dropdown.Item>
                      );
                    })}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Nav>

          {/* search box in nav bar */}
          <Form inline>
            <div className='container'>
              <FormControl
                type='text'
                placeholder='Search recipe'
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

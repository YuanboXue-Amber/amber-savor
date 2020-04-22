import React from 'react';

// style
import './App.scss';

// router
import { Router, Route, Switch } from 'react-router-dom';
import history from './utils/History';

// pages
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import Recipes from './pages/Recipes';
import RecipeDetails from './pages/RecipeDetails';
import RecipeCategories from './pages/RecipeCategories';

// context
import ContextProvider from './context/ContextProvider';

// components
import Header from './component/Header';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <ContextProvider>
      <Router history={history}>
        <Header />
        <Container className='mainContent'>
          <Switch>
            <Route exact path='/'  component={Home} />
            <Route exact path='/about'  component={About} />
            {/* a page with many recipe categories */}
            <Route exact path='/recipes/categories'  component={RecipeCategories} />
            {/* a page with many recipes */}
            <Route exact path='/recipes/categories/:categoryUID'  component={Recipes} />
            {/* a page with details of a single recipe */}
            <Route exact path='/recipes/:recipeUID' component={RecipeDetails}/>

            <Route component={Error} />
          </Switch>
        </Container>
      </Router>
    </ContextProvider>
  );
}

export default App;

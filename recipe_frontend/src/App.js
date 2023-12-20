import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CategoryPage from './CategoryPage';
import RecipePage from './RecipePage';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/categories">Categories</Link>
                    </li>
                    </ul>
                </nav>

                <hr />

                <Route path="/categories" component={CategoryPage} />
                <Route path="/recipes/:recipeId" component={RecipePage} />
            </div>
        </Router>
    );
}

export default App;
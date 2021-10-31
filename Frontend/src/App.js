import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './Navbar';
import './App.css';
import Page404 from "./pages/Page404";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <NavBar />
                    <div id="page-body">
                        <Switch>
                        <Route path="/" component={HomePage} exact />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/articles-list" component={ArticlesListPage} />
                        <Route path="/article/:name" component={ArticlePage} />
                        <Route component={Page404} /> {/* Must be last! */}
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;

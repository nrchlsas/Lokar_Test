import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './componentNew/login';
import Store from './componentNew/store';
import Shopping from './componentNew/shopping';
import Home from './componentNew/home';



// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/shopping">
            <Shopping />
          </Route>
        </Switch>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

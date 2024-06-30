import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/page1" exact component={Page1} />
      <Route path="/page1/subpage1" component={SubPage1} />
      <Route path="/page2" exact component={Page2} />
      <Route path="/page2/subpage2" component={SubPage2} />
      <Route path="/page3" exact component={Page3} />
      <Route path="/page3/subpage3" component={SubPage3} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

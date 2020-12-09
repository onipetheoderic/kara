import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from '../src/pages/HomePage';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from '../src/pages/HomePage';
import DescriptionPage from '../src/pages/DescriptionPage';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/description/:id" component={DescriptionPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

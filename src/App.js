import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Auth from './Auth/Auth';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />

      </Switch>
    </div>
  );
}

export default App;

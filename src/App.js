import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Auth from './components/Auth/Auth';
import PostList from './components/PostList/PostList';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/posts" component={PostList} />
      </Switch>
    </div>
  );
}

export default App;

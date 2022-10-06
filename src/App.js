import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Auth from './components/Auth/Auth';
import PostList from './components/PostList/PostList';
import CreatePost from './components/CreatePost/CreatePost';
import Footer from './components/Footer/Footer';
import EditPost from './components/EditPost/EditPost';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/posts" component={PostList} />
        <Route path="/create-post" component={CreatePost} />
        <Route path="/edit-post/:id" component={EditPost} />
        <Route path="/" component={Auth} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

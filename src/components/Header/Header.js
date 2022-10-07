import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './Header.css';
import { signOut } from '../../services/auth';

function Header() {
  const { user, setUser } = useContext(UserContext);

  const handleSignOut = async () => {
    await signOut();
    setUser(null);
  };

  return (
    <header className="header">
      <div>
        <Link to="/posts">
          <h2>devPal</h2>
        </Link>
      </div>
      <div className="nav">
        {user && (
          <Link to="/create-post" className="nav-link">
            <p>Add post</p>
          </Link>
        )}
        {user && (
          <Link to="/auth/sign-in" className="nav-link">
            <p onClick={handleSignOut}>Logout</p>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;

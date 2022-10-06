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
      <h2>Header</h2>
      {user && (
        <Link to="/create-post">
          <p>Add a post</p>
        </Link>
      )}
      {user && (
        <Link>
          <p onClick={handleSignOut}>Logout</p>
        </Link>
      )}
    </header>
  );
}

export default Header;

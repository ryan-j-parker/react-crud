import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './Header.css';
import { signOut } from '../../services/auth';
import { getProfile } from '../../services/profiles';

function Header() {
  const { user, setUser } = useContext(UserContext);
  // const [username, setUserName] = useState('');

  // const loadUsername = async () => {
  //   const resp = await getProfile(user.id);

  //   setUserName(`${resp.username}`);
  // };

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
      {/* <div className="greeting">
        <h3>Hello {username}!</h3>
      </div> */}
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

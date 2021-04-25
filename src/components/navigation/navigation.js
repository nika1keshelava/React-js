import { NavLink } from 'react-router-dom';

import './styles.css';

function Navigation(props) {
  return (
    <div className="row mt-4 mb-4">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/"
            exact
            activeClassName="active bg-To-DoPage">
            To-Do 
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/notes"
            activeClassName="active bg-CommentPage">
            Comments
          </NavLink>
        </li>
        
      </ul>
    </div>
  );
}

export default Navigation;

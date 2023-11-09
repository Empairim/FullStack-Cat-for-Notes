import { NavLink } from "react-router-dom";
//links to different component pages
function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cats">All Cats</NavLink>
      <NavLink to="/add-cat">Add New Cat!</NavLink>
    </nav>
  );
}

export default Nav;

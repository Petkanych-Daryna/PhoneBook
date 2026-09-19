import { NavLink } from "react-router-dom";

export const Navigation = ({ isLoggedIn }) => {
  return (
    <nav>
      <NavLink to="/">Головна</NavLink>
      <br />
      {isLoggedIn && <NavLink to="/contacts">Контакти</NavLink>}
    </nav>
  );
};

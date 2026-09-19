import { NavLink } from "react-router-dom";

export const AuthNav = () => {
  return (
    <nav>
      <NavLink to="/register">Реєстрація</NavLink>
      <br />
      <NavLink to="/login">Вхід</NavLink>
    </nav>
  );
};

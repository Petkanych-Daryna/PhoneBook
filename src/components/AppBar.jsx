import { AuthNav } from "./AuthNav";
import { Navigation } from "./Navigation";
import { UserMenu } from "./UserMenu";

export const AppBar = ({ isLoggedIn, email, onLogout }) => {
  return (
    <header>
      <Navigation isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <UserMenu email={email} onLogout={onLogout} />
      ) : (
        <AuthNav />
      )}
    </header>
  );
};

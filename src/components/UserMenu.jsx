export const UserMenu = ({email, onLogout}) => {
  return (
    <div>
      <span>{email}</span>
      <button type="button" onClick={onLogout}>Вийти</button>
    </div>
  );
};

import { useState } from "react";

export const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    onLogin({ email, password }).catch((requestError) => {
      setError(requestError.message);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Вхід</h2>
      {error && <p role="alert">{error}</p>}
      <label>
        Пошта
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Пошта"
          type="email"
          required
        />
      </label>
      <br />
      <label>
        Пароль
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          minLength={7}
          required
        />
      </label>
      <br />
      <button type="submit">Увійти</button>
    </form>
  );
};

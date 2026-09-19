import { useState } from "react";

export const RegisterPage = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    onRegister({ name, email, password }).catch((requestError) => {
      setError(requestError.message);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Реєстрація</h2>
      {error && <p role="alert">{error}</p>}
      <label>
        Ім'я
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ім'я"
          required
        />
      </label>
      <br />
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
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          type="password"
          minLength={7}
          required
        />
      </label>
      <br />
      <button type="submit">Зареєструватися</button>
    </form>
  );
};

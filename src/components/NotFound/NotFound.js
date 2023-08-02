import "./NotFound.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="notification">
      <h1 className="notification__title">404</h1>
      <p className="notification__subtitle">Страница не найдена</p>
      <Link className="notification__link" to="/">
        Назад
      </Link>
    </section>
  );
}

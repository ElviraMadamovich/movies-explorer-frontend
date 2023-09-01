import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h3 className="portfolio__title">Портфолио</h3>
        <nav className="portfolio__projects">
          <a
            href="https://github.com/ElviraMadamovich/how-to-learn"
            className="portfolio__project portfolio__project-border"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__description">Статичный сайт</p>
            <p className="portfolio__image">↗</p>
          </a>
          <a
            href="https://elviramadamovich.github.io/russian-travel/"
            className="portfolio__project portfolio__project-border"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__description">Адаптивный сайт</p>
            <p className="portfolio__image">↗</p>
          </a>
          <a
            href="https://github.com/elviramadamovich/react-mesto-api-full-gha"
            className="portfolio__project"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__description">Одностраничное приложение</p>
            <p className="portfolio__image">↗</p>
          </a>
        </nav>
      </div>
    </section>
  );
}

export default Portfolio;

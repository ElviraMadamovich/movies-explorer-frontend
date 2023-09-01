import "./Techs.css";

function Techs() {
  return (
    <section className="techs" id="techs">
      <div className="techs__container">
        <h2 className="techs__title">Технологии</h2>
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__description">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__elements">
          <li className="techs__elements-item">HTML</li>
          <li className="techs__elements-item">CSS</li>
          <li className="techs__elements-item">JS</li>
          <li className="techs__elements-item">React</li>
          <li className="techs__elements-item">Git</li>
          <li className="techs__elements-item">Express.js</li>
          <li className="techs__elements-item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;

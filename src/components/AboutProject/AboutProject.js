import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <div className="about-project__container">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__text">
          <div className="about-project__steps">
            <h3 className="about-project__steps-title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__steps-description">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__steps">
            <h3 className="about-project__steps-title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__steps-description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__process">
          <div className="about-project__process-column about-project__process-column_first">
            <div className="about-project__process-box about-project__process-box_week_first">
              1 неделя
            </div>
            <div className="about-project__process-description">
              Back-end
            </div>
          </div>
          <div className="about-project__process-column about-project__process-column_second">
            <div className="about-project__process-box about-project__process-box_week_second">
              4 недели
            </div>
            <div className="about-project__process-description">Front-end</div>
          </div>
        </div>
      </div>
    </section>
  );
}

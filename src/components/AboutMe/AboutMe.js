import "./AboutMe.css";
import pic from "../../images/author.jpg";
import React from "react";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__text">
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__work">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__history">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы..
          </p>
          <a
            href="https://github.com/elviramadamovich"
            className="about-me__link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={pic} alt="автор" className="about-me__picture" />
      </div>
    </section>
  );
}

export default AboutMe;

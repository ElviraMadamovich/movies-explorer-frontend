import "./AboutMe.css";
import pic from "../../images/author.jpeg";
import React from "react";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студентка</h2>
      <div className="about-me__container">
        <div className="about-me__text">
          <h3 className="about-me__name">Эльвира</h3>
          <p className="about-me__work">Начинающий фронтенд-разработчик</p>
          <p className="about-me__history">
            Я родилась в Поволжье, закончила Ульяновский Государственный Технический университет,
            специальность - лингвист. В данный момент работаю в сфере ВЭД, но всегда интересовалась
            программированием. В 2022 году решила систематизировать и дополнить знания в "Яндекс. Практикум",
            надеюсь, что в дальнейшем они мне пригодятся.
            Хобби: рисование, искусство, путешествия.
            В свободное время хожу в спортзал.
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

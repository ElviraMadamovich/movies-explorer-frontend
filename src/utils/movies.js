const design = new URL('../images/design.jpg', import.meta.url);
const hundredyears = new URL('../images/hundredyears.jpg', import.meta.url);
const banksy = new URL('../images/banksy.jpg', import.meta.url);
const reality = new URL('../images/reality.jpg', import.meta.url);
const running = new URL('../images/running.jpg', import.meta.url);
const booksellers = new URL('../images/booksellers.jpg', import.meta.url);
const germany = new URL('../images/germany.jpg', import.meta.url);
const iggy = new URL('../images/iggy.jpg', import.meta.url);
const jenis = new URL('../images/jenis.jpg', import.meta.url);
const beforejumping = new URL('../images/beforejumping.jpg', import.meta.url);
const pj = new URL('../images/pj.jpg', import.meta.url);
const soundart = new URL('../images/soundart.jpg', import.meta.url);

const movies = [
  {
    title: "33 слова о дизайне",
    duration: "1ч 47м",
    link: design,
    isLiked: [],
  },
  {
    title: "Киноальманах «100 лет дизайна»",
    duration: "1ч 3м",
    link: hundredyears,
    isLiked: [],
  },
  {
    title: "В погоне за Бенкси",
    duration: "1ч 42м",
    link: banksy,
    isLiked: [],
  },
  {
    title: "Баския: Взрыв реальности",
    duration: "1ч 21м",
    link: reality,
    isLiked: [],
  },
  {
    title: "Бег это свобода",
    duration: "1ч 44м",
    link: running,
    isLiked: [],
  },
  {
    title: "Книготорговцы",
    duration: "1ч 37м",
    link: booksellers,
    isLiked: [],
  },
  {
    title: "Когда я думаю о Германии ночью",
    duration: "1ч 56м",
    link: germany,
    isLiked: [],
  },
  {
    title: "Gimme Danger: История Игги и The Stooge",
    duration: "1ч 59м",
    link: iggy,
    isLiked: [],
  },
  {
    title: "Дженис: Маленькая девочка грустит",
    duration: "1ч 42м",
    link: jenis,
    isLiked: [],
  },
  {
    title: "Соберись перед прыжком",
    duration: "1ч 10м",
    link: beforejumping,
    isLiked: [],
  },
  {
    title: "Пи Джей Харви: A dog called money",
    duration: "1ч 4м",
    link: pj,
    isLiked: [],
  },
  {
    title: "По волнам: Искусство звука в кино",
    duration: "1ч 7м",
    link: soundart,
    isLiked: [],
  },
];

export default movies;

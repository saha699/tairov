const user = {
  name: 'Іван',
  surname: 'Шевченко',
  userPhoto: 'my-photo.jpg',
  qrQode: 'qr-code.svg',
  dreams: [
    { src: 'car.jpg', alt: 'Авто моєї мрії' },
    { src: 'home.jpg', alt: 'Домівка на місяці' },
    { src: 'voyage.jpg', alt: 'Подорож до Марсу' },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  500, 
  700, 
  800, 
  1000, 
  1200, 
  1500, 
  1800, 
  2100, 
  2400, 
  2700, 
  3000, 
  3300
];

const necessaryExpenses = 800;

const todo = [
  { month: 'Червень', skill: 'JavaScript' },
  { month: 'Липень', skill: 'Java' },
  { month: 'Серпень', skill: 'Python' },
  { month: 'Вересень', skill: 'Самостійність' },
  { month: 'Жовтень', skill: 'Гнучкість' },
  { month: 'Листопад', skill: 'Емоційний інтелект' },
  { month: 'Грудень', skill: 'Навик #7' },
  { month: 'Січень', skill: 'Навик #8' },
  { month: 'Лютий', skill: 'Лідерство' },
  { month: 'Березень', skill: 'Навик #10' },
  { month: 'Квітень', skill: 'Навик #11' },
  { month: 'Травень', skill: 'Навик #12' },
];

export { user, arr, necessaryExpenses, todo };
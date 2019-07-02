use spaceApp;
db.dropDatabase();

db.spaceApp.insertMany([
  {
    type: "Terrestrial",
    name: "Mercury",
    orbitalPeriodPYear: "88 Earth days",
    rotationalPeriodDay: "58.7 Earth days",
    distanceFromSun: "35.98 million miles",
    diameter: "3,031 miles",
    numberOfSatellites: "0",
    temperature: "100 - 700 K",
    description: "TBC"
  },

  {
    type: "Terrestrial",
    name: "Venus",
    orbitalPeriodPYear: "224.68 Earth days",
    rotationalPeriodDay: "243 Earth days",
    distanceFromSun: "67.2 million miles",
    diameter: "7,521 miles",
    numberOfSatellites: "0",
    temperature: "726 K",
    description: "TBC"
  },

  {
    type: "Terrestrial",
    img: "../client/dist/img/Eart.jpg",
    name: "Earth",
    orbitalPeriodPYear: "365.26 days",
    rotationalPeriodDay: "24 hours",
    distanceFromSun: "93 million miles",
    diameter: "7,926 miles",
    numberOfSatellites: "1",
    temperature: "260 - 310 K",
    description: "TBC"
  },

  {
    type: "Terrestrial",
    name: "Mars",
    orbitalPeriodPYear: "686.98 days",
    rotationalPeriodDay: "24.6 Earth hours",
    distanceFromSun: "141.6 million miles",
    diameter: "4,222 miles",
    numberOfSatellites: "2",
    temperature: "150 - 310 K",
    description: "TBC"
  },
  {
    type: "Gas Giant",
    name: "Jupiter",
    orbitalPeriodPYear: "11.862 Earth years",
    rotationalPeriodDay: "9.84 Earth hours",
    distanceFromSun: "483.6 million miles",
    diameter: "88,729 miles",
    numberOfSatellites: "79",
    temperature: "120 K",
    description: "TBC"
  },

  {
    type: "Gas Giant",
    name: "Saturn",
    orbitalPeriodPYear: "29.456 Earth years",
    rotationalPeriodDay: "10.2 Earth hours",
    distanceFromSun: "886.7 million miles",
    diameter: "74,600 miles",
    numberOfSatellites: "62",
    temperature: "88 K",
    description: "TBC"
  },
  {
    type: "Ice Giant",
    name: "Uranus",
    orbitalPeriodPYear: "84.07 Earth years",
    rotationalPeriodDay: "17.9 Earth hours",
    distanceFromSun: "1,784.0 million miles",
    diameter: "32,600 miles",
    numberOfSatellites: "27",
    temperature: "59 K",
    description: "TBC"
  },
  {
    type: "Ice Giant",
    name: "Neptune",
    orbitalPeriodPYear: "164.81 Earth years",
    rotationalPeriodDay: "19.1 Earth hours",
    distanceFromSun: "2,794.4 million miles",
    diameter: "30,200 miles",
    numberOfSatellites: "13",
    temperature: "48 K",
    description: "TBC"
  },
  {
    type: "Dwarf planet",
    name: "Pluto",
    orbitalPeriodPYear: "247.7 Earth years",
    rotationalPeriodDay: "6.39 Earth days",
    distanceFromSun: "3,674.5 million miles",
    diameter: "1,413 miles",
    numberOfSatellites: "4",
    temperature: "37 K",
    description: "TBC"
  },
  {
    type: "Yellow Dwarf Star",
    name: "Sun",
    orbitalPeriodPYear: "225 million Earth years",
    rotationalPeriodDay: "26.24 Earth days",
    distanceFromSun: "N/A",
    diameter: "864,340 miles",
    numberOfSatellites: "0",
    temperature: "5,778 K",
    description: "TBC"
  },
  {
    type: "fact",
    name: "Mercury",
    fact: "Mercury is the smallest planet in our solar system."
  },
  {
    type: "fact",
    name: "Mercury",
    fact: "Your weight on Mercury would be 38% of your weight on Earth."
  },
  {
    type: "fact",
    name: "Mercury",
    fact: "It’s not known who discovered Mercury."
  },
  {
    type: "fact",
    name: "Mercury",
    fact: "Mercury is the most cratered planet in the Solar System."
  },
  {
    type: "fact",
    name: "Venus",
    fact: "The surface temperature on Venus can reach 471 °C."
  },
  {
    type: "fact",
    name: "Venus",
    fact: "Venus is thought to be made up of a central iron core, rocky mantle and silicate crust."
  },
  {
    type: "fact",
    name: "Venus",
    fact: "Venus rotates in the opposite direction to most other planets."
  },
  {
    type: "fact",
    name: "Venus",
    fact: "Venus is the second brightest object in the night sky."
  },
  {
    type: "fact",
    name: "Earth",
    fact: "The Earth’s rotation is gradually slowing."
  },
  {
    type: "fact",
    name: "Earth",
    fact: "The Earth was once believed to be the centre of the universe."
  },
  {
    type: "fact",
    name: "Earth",
    fact: "Earth is the only planet not named after a god."
  },
  {
    type: "fact",
    name: "Earth",
    fact: "Our planet is the only known planet to support life."
  },
  {
    type: "fact",
    name: "Mars",
    fact: "Mars and Earth have approximately the same landmass."
  },
  {
    type: "fact",
    name: "Mars",
    fact: "Mars is home to the tallest mountain in the solar system."
  },
  {
    type: "fact",
    name: "Mars",
    fact: "Pieces of Mars have fallen to Earth."
  },
  {
    type: "fact",
    name: "Mars",
    fact: "There are signs of liquid water on Mars."
  },
  {
    type: "fact",
    name: "Jupiter",
    fact: "Jupiter has the shortest day of all the planets."
  },
  {
    type: "fact",
    name: "Jupiter",
    fact: "Jupiter’s interior is made of rock, metal, and hydrogen compounds."
  },
  {
    type: "fact",
    name: "Jupiter",
    fact: "Jupiter’s moon Ganymede is the largest moon in the solar system."
  },
  {
    type: "fact",
    name: "Jupiter",
    fact: "Eight spacecraft have visited Jupiter."
  },
  {
    type: "fact",
    name: "Saturn",
    fact: "Saturn is the flattest planet."
  },
  {
    type: "fact",
    name: "Saturn",
    fact: "Saturn’s upper atmosphere is divided into bands of clouds."
  },
  {
    type: "fact",
    name: "Saturn",
    fact: "Saturn is made mostly of hydrogen."
  },
  {
    type: "fact",
    name: "Saturn",
    fact: "Saturn can be seen from Earth with the naked eye."
  },
  {
    type: "fact",
    name: "Uranus",
    fact: "Uranus was officially discovered by Sir William Herschel in 1781."
  },
  {
    type: "fact",
    name: "Uranus",
    fact: "Uranus is often referred to as an “ice giant” planet."
  },
  {
    type: "fact",
    name: "Uranus",
    fact: "Uranus hits the coldest temperatures of any planet."
  },
  {
    type: "fact",
    name: "Uranus",
    fact: "Uranus has two sets of very thin dark coloured rings."
  },
  {
    type: "fact",
    name: "Neptune",
    fact: "Only one spacecraft has flown by Neptune."
  },
  {
    type: "fact",
    name: "Neptune",
    fact: "Neptune has a very thin collection of rings."
  },
  {
    type: "fact",
    name: "Neptune",
    fact: "The atmosphere of Neptune is made of hydrogen and helium, with some methane."
  },
  {
    type: "fact",
    name: "Neptune",
    fact: "Neptune spins on its axis very rapidly."
  },
  {
    type: "fact",
    name: "Pluto",
    fact: "Pluto is named after the Roman god of the underworld."
  },
  {
    type: "fact",
    name: "Pluto",
    fact: "Pluto was reclassified from a planet to a dwarf planet in 2006."
  },
  {
    type: "fact",
    name: "Pluto",
    fact: "Pluto was discovered on February 18th, 1930 by the Lowell Observatory."
  },
  {
    type: "fact",
    name: "Pluto",
    fact: "Pluto is one third water."
  },
  {
    type: "fact",
    name: "Sun",
    fact: "One million Earths could fit inside the Sun."
  },
  {
    type: "fact",
    name: "Sun",
    fact: "The Sun will one day be about the size of Earth."
  },
  {
    type: "fact",
    name: "Sun",
    fact: "The Sun is composed of hydrogen (70%) and Helium (28%)."
  },
  {
    type: "fact",
    name: "Sun",
    fact: "The Sun travels at 220 kilometres per second."
  }
]);

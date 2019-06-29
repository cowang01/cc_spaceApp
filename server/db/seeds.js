use spaceApp
db.dropDatabase();

db.spaceApp.insertMany([
  {
    type: "planet",
    name: "Mercury",
    orbitalPeriodPYear: "88 Earth days",
    lenghtOfDay: "58.7 Earth days",
    distanceFromSun: "35.98 million miles",
    diameter: "3,031 miles",
    numberOfMoons: "0",
    temperature: "100 - 700 K",
    description: "TBC"
  },

  {
    type: "planet",
    name: "Venus",
    orbitalPeriodPYear: "224.68 Earth days",
    rotationalPeriodDay: "243 Earth days",
    distanceFromSun: "67.2 million miles",
    diameter: "7,521 miles",
    numberOfMoons: "0",
    temperature: "726 K",
    description: "TBC"
  },

  {
    type: "planet",
    name: "Earth",
    orbitalPeriodPYear: "365.26 days",
    rotationalPeriodDay: "24 hours",
    distanceFromSun: "93 million miles",
    diameter: "7,926 miles",
    numberOfMoons: "1",
    temperature: "260 - 310 K",
    description: "TBC"
  },

  {
    type: "planet",
    name: "Mars",
    orbitalPeriodPYear: "686.98 days",
    rotationalPeriodDay: "24.6 Earth hours",
    distanceFromSun: "141.6 million miles",
    diameter: "4,222 miles",
    numberOfMoons: "2",
    temperature: "150 - 310 K",
    description: "TBC"
  },
  {
    type: "planet",
    name: "Jupiter",
    orbitalPeriodPYear: "11.862 Earth years",
    rotationalPeriodDay: "9.84 Earth hours",
    distanceFromSun: "483.6 million miles",
    diameter: "88,729 miles",
    numberOfMoons: "67",
    temperature: "120 K",
    description: "TBC"
  },

  {
    type: "planet",
    name: "Saturn",
    orbitalPeriodPYear: "29.456 Earth years",
    rotationalPeriodDay: "10.2 Earth hours",
    distanceFromSun: "886.7 million miles",
    diameter: "74,600 miles",
    numberOfMoons: "62",
    temperature: "88 K",
    description: "TBC"
  },
  {
    type: "planet",
    name: "Uranus",
    orbitalPeriodPYear: "84.07 Earth years",
    rotationalPeriodDay: "17.9 Earth hours",
    distanceFromSun: "1,784.0 million miles",
    diameter: "32,600 miles",
    numberOfMoons: "27",
    temperature: "59 K",
    description: "TBC"
  },
  {
    type: "planet",
    name: "Neptune",
    orbitalPeriodPYear: "164.81 Earth years",
    rotationalPeriodDay: "19.1 Earth hours",
    distanceFromSun: "2,794.4 million miles",
    diameter: "30,200 miles",
    numberOfMoons: "13",
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
    numberOfMoons: "4",
    temperature: "37 K",
    description: "TBC"
  }

])

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
  }

])

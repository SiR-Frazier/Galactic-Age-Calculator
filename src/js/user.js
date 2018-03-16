export class User {
  constructor(birthYear, age, birthdate) {
    this.birthYear = birthYear;
    this.currentYear = 2018;
    this.age = age;
    this.birthdate = birthdate;
    this.earthLifeExpectancy = 71.4;
  }

}

  function ageInYears() {
    let birthdate = new Date(birthdate);
    this.birthYear = birthdate.getFullYear();
    this.age = this.CurrentYear - this.birthYear;
  }

  function ageInSeconds() {
    let seconds = this.age * 31536000;
    return seconds;
  }


function ageOnMercury(age) {
    earthDays = age * 365;
    mercuryYears = earthDays / 88;
    return mercuryYears;
}

  function ageOnVenus(age) {
    let earthDays = age * 365;
    let venusYears = earthDays / 225;
    return venusYears;
  }

  function ageOnMars(age) {
    let earthDays = age * 365;
    let marsYears = earthDays / 687;
    return marsYears;
  }

  function ageOnJupiter(age) {
    let earthDays = age * 365;
    let jupiterYears = earthdays / (11.8 * 365);
    return jupiterYears;
  }

  function secondsDifference() {
    let bdate1 = new Date(birthdate);
    let bdate2 = new Date(birthdate);
  }

  function mercuryLifeExpectancy() {
    let earthDays = this.earthLifeExpectancy * 365;
    let marsYears = earthDays / 88;
    return marsYears;
  }

  function venusLifeExpectancy() {
    let earthDays = this.earthLifeExpectancy * 365;
    let marsYears = earthDays / 88;
    return marsYears;
  }

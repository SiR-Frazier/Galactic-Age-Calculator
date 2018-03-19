export class User {
  constructor() {
    this.age = age;
    this.currentYear = year;
    this.birthYear = birthYear
    this.earthLifeExpectancy = 71;
  }

  ageInYears() {
    this.currentYear = new Date().getFullYear();
    this.birthYear = new Date().getFullYear();
    this.age = this.currentYear - this.birthYear;
    return this.age;
  }

  ageInSeconds() {
    const seconds = this.age * 31536000;
    return seconds;
  }

  differenceInSeconds(dateA, dateB) {
    let dateA = new Date(dateA);
    let dateB = new Date(dateB);
    let difference = (dateA.getTime()/ 1000) - (dateB.getTime()/ 1000);
    return difference;
  }

  mercuryAge() {
    const mercuryYears = parseInt(this.age / .24);
    return mercuryYears;
}

  venusAge() {
    const venusYears = parseInt(this.age / .62);
    return venusYears;
  }

  marsAge() {
    const marsYears = parseInt(this.age / 1.88);
    return marsYears;
  }

  jupiterAge() {
    const jupiterYears = parseInt(this.age / 11.86);
    return jupiterYears;
  }

  lifeLeftMercury() {
    const mercuryAvgLife = parseInt(this.earthLifeExpectancy/ .24);
    const yearsLeft = mercuryAvgLife - parseInt(this.age/ .24);
    return yearsLeft;
  }

  lifeLeftVenus() {
    const venusAvgLife = parseInt(this.earthLifeExpectancy/ .62);
    const yearsLeft = venusAvgLife - parseInt(this.age/ .62)
    return yearsLeft;
  }

  lifeLeftMars() {
    const marsAvgLife = parseInt(this.earthLifeExpectancy/ 1.88);
    const yearsLeft = marsAvgLife - parseInt(this.age/ 1.88)
    return yearsLeft;
  }

  lifeLeftJupiter() {
    const jupiterAvgLife = parseInt(this.earthLifeExpectancy/ 11.86);
    const yearsLeft = jupiterAvgLife - parseInt(this.age/ 11.86)
    if(years)
    return yearsLeft;
  }

}

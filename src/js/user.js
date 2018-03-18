export class User {
  constructor() {
    this.age = age;
    this.date = date;
    this.currentYear = year;
    this.birthYear = birthYear
    this.earthLifeExpectancy = 71;
  }

  ageInYears() {
    this.currentYear = new Date().getFullYear();
    this.birthYear = new Date().getFullYear();
    this.age = currentYear - birthYear;
    return this.age;
  }

  ageInSeconds() {
    let seconds = this.age * 31536000;
    return seconds;
  }

  mercuryAge() {
    let mercuryYears = parseInt(this.age / .24);
    return mercuryYears;
}

  venusAge() {
    let venusYears = parseInt(this.age / .62);
    return venusYears;
  }

  marsAge() {
    let marsYears = parseInt(this.age / 1.88);
    return marsYears;
  }

  jupiterAge() {
    let jupiterYears = parseInt(this.age / 11.86);
    return jupiterYears;
  }

  lifeLeftMercury() {
    let mercuryAvgLife = parseInt(this.earthLifeExpectancy/ .24);
    let yearsLeft = mercuryAvgLife - parseInt(this.age/ .24);
    return yearsLeft;
  }

  lifeLeftVenus() {
    let venusAvgLife = parseInt(this.earthLifeExpectancy/ .62);
    let yearsLeft = venusAvgLife - parseInt(this.age/ .62)
    return yearsLeft;
  }

  lifeLeftMars() {
    let marsAvgLife = parseInt(this.earthLifeExpectancy/ 1.88);
    let yearsLeft = marsAvgLife - parseInt(this.age/ 1.88)
    return yearsLeft;
  }

  lifeLeftJupiter() {
    let jupiterAvgLife = parseInt(this.earthLifeExpectancy/ 11.86);
    let yearsLeft = jupiterAvgLife - parseInt(this.age/ 11.86)
    return yearsLeft;
  }
}

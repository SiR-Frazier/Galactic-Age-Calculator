export class User {
  constructor(age) {
    this.age = age;
    // this.currentYear = year;
    // this.birthYear = birthYear;
    this.earthLifeExpectancy = 71;
  }

  ageInYears() {
    const currentYear = new Date().getFullYear();
    const birthYear = new Date().getFullYear();
    this.age = currentYear - birthYear;
    return this.age;
  }

  ageInSeconds(age) {
    const seconds = this.age * 31536000;
    return seconds;
  }

  differenceInSeconds(date1, date2) {
    let presentInSec = new Date(date1).getTime()/1000;
    let pastInSec = new Date(date2).getTime()/1000
    let difference = presentInSec - pastInSec;
    return difference;
  }

  mercuryAge(age) {
    const mercuryYears = Math.round(this.age / .24);
    return mercuryYears;
}

  venusAge(age) {
    const venusYears = Math.round(this.age / .62);
    return venusYears;
  }

  marsAge(age) {
    const marsYears = Math.round(this.age / 1.88);
    return marsYears;
  }

  jupiterAge(age) {
    const jupiterYears = Math.round(this.age / 11.86);
    return jupiterYears;
  }

  lifeLeftMercury(age) {
    const mercuryAvgLife = Math.round(this.earthLifeExpectancy/ .24);
    const mercuryAge = Math.round(this.age/ .24);
    const yearsLeft = mercuryAvgLife - mercuryAge;
    if (mercuryAge > mercuryAvgLife) {
      alert("Whoa! Keep on truckin'!")
    } else {
      return yearsLeft;
    }
  }

  lifeLeftVenus(age) {
    const venusAvgLife = Math.round(this.earthLifeExpectancy/ .62);
    const venusAge =  Math.round(this.age/ .62);
    const yearsLeft = venusAvgLife - venusAge;
    if (venusAge > venusAvgLife) {
      alert("Whoa! Keep on truckin'!")
    } else {
      return yearsLeft;
    }
  }

  lifeLeftMars(age) {
    const marsAvgLife = Math.round(this.earthLifeExpectancy/ 1.88);
    const marsAge = Math.round(this.age/ 1.88);
    const yearsLeft = marsAvgLife - marsAge;
    if (marsAge > marsAvgLife) {
      alert("Whoa! Keep on truckin'!")
    } else {
      return yearsLeft;
    }
  }

  lifeLeftJupiter(age) {
    const jupiterAvgLife = Math.round(this.earthLifeExpectancy/ 11.86);
    const ageOnJupiter = Math.round(this.age/ 11.86);
    const yearsLeft = jupiterAvgLife - ageOnJupiter;
    if(ageOnJupiter > jupiterAvgLife) {
      alert("Whoa! Keep on truckin'!")
    } else {
      return yearsLeft;
    }
  }

}

export class User {
  constructor(age, birthday) {
    this.age = age;
    this.birthday = birthday
    this.earthLifeExpectancy = earthLifeExpectancy;
  }

  ageInSeconds() {
    let seconds = age * 31536000;
    return seconds;
  }

  mercuryAge(age) {
    const earthDays = age * 365;
    let mercuryYears = earthDays / 88;
    return mercuryYears;
}

  venusAge(age) {
    const earthDays = age * 365;
    let venusYears = earthDays / 225;
    return venusYears;
  }

  marsAge(age) {
    const earthDays = age * 365;
    let marsYears = earthDays / 687;
    return marsYears;
  }

  jupiterAge(age) {
    const earthDays = age * 365;
    let jupiterYears = earthdays / (11.8 * 365);
    return jupiterYears;
  }

//   mercuryDeath(age) {
//     const earthDays = age * 365;
//     let earthLifeExpectancy = 70 * ;
//     let mercurylifeExpectancy = earthLifeExpectancy / 88;
//     let difference = mercurylifeExpectancy - age;
//     return difference;
//   }
//
//   venusDeath(age) {
//     const earthDays = age * 365;
//     let earthLifeExpectancy = 70;
//     let venusYears = earthDays / 225;
//     let difference = venusLifeExpectancy - age;
//     return difference;
//   }
//
//   marsDeath(age) {
//     const earthDays = earthLifeExpectancy * 365;
//     let marsYears = earthDays / 687;
//     return marsYears;
//     let difference = marsYears - earthLifeExpectancy;
//     return difference;
//   }
//
//   jupiterDeath(age) {
//     const earthDays = earthLifeExpectancy * 365;
//     let jupiterYears = earthDays / (11.8 * 365);
//     let difference = venusYears - earthLifeExpectancy;
//     return difference;
//   }
// }

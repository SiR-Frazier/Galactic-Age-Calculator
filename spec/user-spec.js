import { User } from './../src/js/user.js';

describe('User', function() {

  it('will return the input age in seconds', function(){
    let user = new User(32);
    expect(user.ageInSeconds(32)).toEqual(1009152000)
  });

  it('will return the difference in seconds between dates', function() {
    let date1 = new User(2018,01,12);
    let date2 = new User(1986,04,23);
    expect(user.differenceInSeconds((2018,01,12),(1986,04,23)).toEqual(100120680)
  });

  it('will return the age in years on the planet Mercury', function() {
    let user = new User(32);
    expect(user.mercuryAge(32)).toEqual(133)
  });

  it('will return the age in years on the planet Venus', function() {
    let user = new User(32);
    expect(user.venusAge(32)).toEqual(51)
  });

  it('will return the age in years on the planet Mars', function() {
    let user = new User(32);
    expect(user.marsAge(32)).toEqual(17)
  });

  it('will return the age in years on the planet Jupiter', function() {
    let user = new User(32);
    expect(user.jupiterAge(32)).toEqual(2)
  });

  it('will return how many years the user has left on Mercury based on their age', function() {
    let user = new User(32);
    expect(user.lifeLeftMercury(32)).toEqual(162)
  });

  it('will return how many years the user has left on Venus', function() {
    let user = new User(32);
    expect(user.lifeLeftVenus(32)).toEqual(63)
  });

  it('will return how many years the user has left on Mars', function() {
    let user = new User(32);
    expect(user.lifeLeftMars(32)).toEqual(20)
  });

  it('will return how many years the user has left on Jupiter', function() {
    let user = new User(32);
    expect(user.lifeLeftJupiter(32)).toEqual(3)
  });
}); //main closing brackets

import { User } from './../src/js/user.js';

describe('User', function() {

  it('will return the age in seconds', function(){
    let user = new User(32);
    expect(User.ageInSeconds).toEqual(1009152000)
  });

  it('will return the difference in seconds between 2 ages', function() {
    let user1 = new User.age(32);
    let user2 = new User.age(34);
    expect(User.ageDifference).toEqual(6307200)
  });

  it('will return the age in years on the planet Mercury', function() {
    let user = new User.age(32);
    expect(User.ageOnMercury).toEqual(132.7)
  });

  it('will return the age in years on the planet Venus', function() {
    let user = new User.age(32);
    expect(User.ageOnVenus).toEqual(51.9)
  });

  it('will return the age in years on the planet Mars', function() {
    let user = new User.age(32);
    expect(User.ageOnMars).toEqual(17.00)
  });

  it('will return the age in years on the planet Jupiter', function() {
    let user = new User.age(32);
    expect(User.ageOnJupiter).toEqual(2.71)
  });

  it('will return the life expectancy in years on Mercury', function() {
    let earthLifeExpectancy = 71.4;
    expect(User.mercuryLifeExpectancy).toEqual(296.15)
  });

  it('will return the life expectancy in years on Venus', function() {
    // let earthLifeExpectancy = 71.4;
    expect(User.VenusLifeExpectancy).toEqual(115.83)
  });

}); //main closing brackets

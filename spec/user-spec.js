import { User } from './../src/js/user.js';

describe('User', function() {

  it('will return the age in seconds', function(){
    let age = new User(32);
    expect(age.ageInSeconds).toEqual(1009152000)
  });

  // it('will return the difference in seconds between 2 ages', function() {
  //   let user1 = new User.age(32);
  //   let user2 = new User.age(34);
  //   expect(User.ageDifference).toEqual(6307200)
  // });

  it('will return the age in years on the planet Mercury', function() {
    let age = new User.age(32);
    expect(age.mercuryAge).toEqual(132.7)
  });

  it('will return the age in years on the planet Venus', function() {
    let user = new User.age(32);
    expect(User.venusAge).toEqual(51.9)
  });

  it('will return the age in years on the planet Mars', function() {
    let user = new User.age(32);
    expect(User.marsAge).toEqual(17.00)
  });

  it('will return the age in years on the planet Jupiter', function() {
    let user = new User.age(32);
    expect(User.jupiterAge).toEqual(2.71)
  });

  // it('will return how many years the user has left on Mercury based on their age', function() {
  //   let earthLifeExpectancy = 71.4;
  //   expect(User.mercuryDeath).toEqual(296.15)
  // });
  //
  // it('will return how many years the user has left on Mercury', function() {
  //   let earthLifeExpectancy = 71.4;
  //   expect(User.jupiterDeath).toEqual(296.15)
  // });

}); //main closing brackets

import { User } from './../src/js/user.js';

describe('User', function() {

  it('will return the input age in seconds', function(){
    let user = new User(32);
    expect(user.ageInSeconds()).toEqual(1009152000)
  });

  it('will return the difference in seconds between dates', function() {
    let date1 = new User(2018,01,12);
    let date2 = new User(1986,04,23);
    expect(User.differenceInSeconds(date1,date2)).toEqual(100120680)
  });

  it('will return the age in years on the planet Mercury', function() {
    let user = new User(32);
    expect(user.mercuryAge()).toEqual(133)
  });

  it('will return the age in years on the planet Venus', function() {
    let user = new User(32);
    expect(user.venusAge()).toEqual(51)
  });

  it('will return the age in years on the planet Mars', function() {
    let user = new User(32);
    expect(user.marsAge()).toEqual(17)
  });

  it('will return the age in years on the planet Jupiter', function() {
    let user = new User(32);
    expect(user.jupiterAge()).toEqual(2)
  });

  it('will return how many years the user has left on Mercury based on their age', function() {
    let user = new User(32)    expect(user.lifeLeftMercury()).toEqual(162)
  });

  it('will return how many years the user has left on Venus', function() {
    let user = new User(32)
    expect(user.lifeLeftVenus()).toEqual(63)
  });

  it('will return how many years the user has left on Mars', function() {
    let user = new User(32)
    expect(user.lifeLeftMars()).toEqual(20)
  });

  it('will return how many years the user has left on Jupiter', function() {
    let user = new User(32)
    expect(user.lifeLeftJupiter()).toEqual(3)
  });
}); //main closing brackets

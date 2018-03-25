import { User } from './../src/js/user.js';

describe('User', function() {

  it('will return the input age in seconds', function(){
    let user = new User(32);
    expect(user.ageInSeconds(32)).toEqual(1009152000)
  });

  it('will return the difference in seconds between years', function() {
    let present = new Date();
    let birthDate = new Date(1986,04,23);
    expect(user.differenceInSeconds(present,birthDate)).toEqual(63072000)
  });

  it('will return the age in years on the planet Mercury', function() {
    let user = new User(32);
    expect(user.mercuryAge(32)).toEqual(133)
  });

  it('will return the age in years on the planet Venus', function() {
    let user = new User(32);
    expect(user.venusAge(32)).toEqual(52)
  });

  it('will return the age in years on the planet Mars', function() {
    let user = new User(32);
    expect(user.marsAge(32)).toEqual(17)
  });

  it('will return the age in years on the planet Jupiter', function() {
    let user = new User(32);
    expect(user.jupiterAge(32)).toEqual(3)
  });

  it('will return how many years the user has left on Mercury based on their age', function() {
    let user = new User(32);
    expect(user.lifeLeftMercury(32)).toEqual(163)
  });

  it('will return how many years the user has left on Venus', function() {
    let user = new User(32);
    expect(user.lifeLeftVenus(32)).toEqual(63)
  });

  it('will return how many years the user has left on Mars', function() {
    let user = new User(32);
    expect(user.lifeLeftMars(32)).toEqual(21)
  });

  it('will return how many years the user has left on Jupiter', function() {
    let user = new User(32);
    expect(user.lifeLeftJupiter(32)).toEqual(3)
  });
}); //main closing brackets

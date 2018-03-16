import { User } from './../src/js/user.js';

desribe('User', function() {
  let user1
  let user2;

  // beforeEach(function() {
  //   reusableUser = new User(1986, '1986-04-23', 32);
  //   anotherUser = new User(1984, '1984-03-14', 34);
  // });

  it('will return the age in seconds', function(){
    let user1 = new User(32);
    expect(user1.ageInSeconds).toEqual(1009152000)
  });

  it('will return the difference in seconds between 2 ages', function() {
    let user1 = new User.age(32);
    let user2 = new User.age(34);
    expect(User.ageDifference).toEqual()
  });

  it('will return the age in years on the planet Mercury', function() {
    let user1 = new User.age(32);
    expect(User.ageOnMercury).toEqual(132.7)
  });

  it('will return the age in years on the planet Mercury', function() {
    let user1 = new User.age(32);
    expect(User.ageOnMercury).toEqual(132.7)
  });

  it('will return the age in years on the planet Venus', function() {
    let user1 = new User.age(32);
    expect(User.ageOnVenus).toEqual(51.9)
  });

  it('will return the age in years on the planet Venus', function() {
    let user1 = new User.age(32);
    expect(User.ageOnVenus).toEqual(51.9)
  });

  it('will return the age in years on the planet Mars', function() {
    let user1 = new User.age(32);
    expect(User.ageOnMars).toEqual(17.00)
  });

  it('will return the age in years on the planet Mars', function() {
    let user1 = new User.age(32);
    expect(User.ageOnJupiter).toEqual(2.71)
  });

}); //main closing brackets

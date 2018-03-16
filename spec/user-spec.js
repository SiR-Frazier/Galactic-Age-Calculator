import { User } from './../src/js/user.js';

desribe('User', function() {
  let reusableUser;
  let anotherUser;

  beforeEach(function() {
    reusableUser = new User(1986, '1986-04-23', 32);
    anotherUser = new User(1984, '1984-03-14', 34);
  });

  it('will return the age in seconds', function(){
    reusableUser.getSeconds();
    expect(reusableUser.age).toEqual(1009152000)
  });

  it()

}); //main closing brackets

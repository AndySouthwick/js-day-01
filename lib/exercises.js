/*
 * This is the first assignment towards your JS adventure.
 * Ignore everything except for the comments above the methods. The
 * methods are just for testing purposes so you know when you have
 * accomplished a specific task.
 *
 * Place the answer required after each "return" keyword in each
 * method and Wallaby will let you know when you have it right
 */

export default class {

  /*
   * Return a string with the charactrs Hello World
   */
  helloWorld() {
    return 'Hello World';
  }

  /*
   * Return the answer to everything. The number 42
   */
  theAnswerToEverything() {
    return 42;
  }

  /*
   * Return a simple boolean
   */
  isJSHard() {
    return true;
  }

  /*
   * Return a mathematical expression that results in the answer being 4
   */
  resultOfFour() {
    return 2 + 2;
  }

  /*
   * Return a mathematical expression that results in 42 (Use a different operator than before)
   */
  resultOfFortyTwo() {
    return 6 * 7;
  }

  /*
   * Return a variable that is holding a string of your first name
   */
  myFirstName() {
    let firstName = 'Andy';
    return firstName;
  }

  /*
   * Return a variable that is holding a string of your last name
   */
  myLastName() {
    let lastName = 'Southwick';
    return lastName;
  }

  /*
   * Return two variables each holding a string of your first and last name respectively but joined (concatenated) together
   */
  myFirstAndLastName() {
    var firstName = 'Andy';
    var lastName = 'Southwick';
    return firstName + ' ' + lastName;
  }

  /*
   * Return (using typeof) the type of 'Great Job!'
   */
  whatsTheType() { 
    return  typeof 'Great Job';
  }

}

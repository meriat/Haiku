import { Haiku } from '../src/haiku.js';

describe('Haiku', function() {

  // it('should correctly determine if a triangle is equilateral', function() {
  //   var triangle = new Triangle(3,3,3)
  //   expect(triangle.checkType()).toEqual("an equilateral triangle");
  // });

  it('should return the count of syllabls in a word', function(){
     let haiku = new Haiku("inferno", "", "");
     haiku.checkVowel();
     expect(haiku.findSyllableInWord()).toEqual(3);
  });

});

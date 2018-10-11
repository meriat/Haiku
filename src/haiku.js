export function Haiku(line1, line2, line3) {
  this.line1 = line1;
  this.line2 = line2;
  this.line3 = line3;
  this.syllableArray = [];
  // this.testHaiku = new Haiku(this.line1, this.line2, this.line3);
}

Haiku.prototype.checkVowel = function() {
  
  let vowel = ['a','e','i','o','u'];
  let arrayLine1 = (this.line1).split('');
  for(let i=0; i < arrayLine1.length; i ++){
    
    if(vowel.includes(arrayLine1[i])){
      this.syllableArray.push('1');
    } else {
      this.syllableArray.push('0');
    }
  }
  return this.syllableArray;
};
// if length of word is odd, 
Haiku.prototype.findSyllableInWord = function() {
  // this.checkVowel(); 
  let result = 0; 
  let isEven = this.syllableArray.length % 2 === 0;
  if(isEven){
    for(let j = 0; j < this.syllableArray.length; j+=2) {
      if(this.syllableArray[j] === '1' && this.syllableArray[j+1] === '0')
      {
        result ++; 
      }
      else if (this.syllableArray[j] === '0' && this.syllableArray[j+1] === '1') {
        result ++; 
      } 
      else{
        result += 0;
        }
    }
    return result;
  }
  else {
    for( let j = 0; j <= this.syllableArray.length -1; j+=2){
      if(this.syllableArray[j] === '1' && this.syllableArray[j+1] === '0')
      {
        result ++; 
      }
      else if (this.syllableArray[j] === '0' && this.syllableArray[j+1] === '1') {
        result ++; 
      } else {
        result += 0;
       }
    }
    result += parseInt(this.syllableArray[this.syllableArray.length-1]);
    return result;
    
  }
};

// Haiku.prototype.findSyllableInLine = function () {
  
//   let splitLine = this.line1.split(' ');
//   for (let i = 0; i < splitLine.length; i++) {
    
//   }
// }


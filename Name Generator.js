function theName(){
 const firstNameSyllables= ['gil','zi','thar','der','xal','na','ma','kil','xar','dar',
  'lar','xen','un','vor','mar','il','al','ul','gar','zan','seg','dir','dalan',
  'nek', 'for', 'ghel', 'bor','yd','ad','na','ren','sal','xyl','ny','yar','var',
  'shik', 'shar','vu','ash'];
//Integer Function
  function getInteger(min,max){
    return Math.floor((Math.random() * (max-min)) + min);
  }
  let numberOfSyllables = getInteger(1,4); //Chooses name range

  //Randomizer
  function createName(){
   let firstName='';
   for (let i = 0; i < numberOfSyllables ; i++) {
        syllable=Math.floor((Math.random() *firstNameSyllables.length));
     firstName+=firstNameSyllables[syllable];
     firstName=firstName[0].toUpperCase() +firstName.slice(1);
}

 return firstName;
 };

  return createName();
}
console.log(theName());

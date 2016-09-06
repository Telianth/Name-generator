function theName(){
  firstNameSyllables= ['gil','zi','thar','der','xal','na','ma','kil','xar','dar',
  'lar','xen','un','vor','mar','il','al','ul','gar','zan','seg','dir','dalan',
  'nek', 'for', 'ghel', 'bor','yd','ad','na','ren','sal','xyl','ny'];

  function getInteger(min,max){
    return Math.floor((Math.random() * (max-min)) + min);
  }
  let numberOfSyllables = getInteger(1,4);
  function createName(){
   firstName='';
   for (var i = 0; i < numberOfSyllables ; i++) {
        let g=Math.floor((Math.random() *firstNameSyllables.length));
     firstName+=firstNameSyllables[g];
   }
  return firstName;
  }

  console.log(createName());
}
console.log(theName());
